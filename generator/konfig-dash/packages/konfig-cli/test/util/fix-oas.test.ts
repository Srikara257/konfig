import { parseSpec, ResponsesObject, Spec } from 'konfig-lib'
import { fixOas } from '../../src/util/fix-oas'
import { Progress } from '../../src/util/fix-progress'

describe('fix-oas', () => {
  const responses: ResponsesObject = {
    '200': {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'string',
          },
        },
      },
    },
  }
  describe('custom modifications', () => {
    it('simple', async () => {
      const oas: Spec['spec'] = {
        openapi: '3.0.0',
        info: {
          title: 'Test API',
          description: 'Test',
          version: '1.0.0',
        },
        tags: [{ name: 'Tag' }],
        paths: {},
        components: {},
      }
      const spec = await parseSpec(JSON.stringify(oas))
      const progress = new Progress({
        progress: {},
        noSave: true,
      })
      await fixOas({
        spec,
        progress,
        konfigYaml: {
          defaultChangesetBumpType: 'patch',
          generators: {},
          specPath: '',
          fixConfig: { modify: { '$.info.description': 'New Test' } },
        },
        alwaysYes: true,
        auto: true,
        ci: false,
        useAIForOperationId: false,
        useAIForTags: false,
        noInput: false,
      })
      expect(spec.spec).toMatchSnapshot()
    })
  })
  describe('disallowed-header-names', () => {
    it('request', async () => {
      const oas: Spec['spec'] = {
        openapi: '3.0.0',
        info: {
          title: 'Test API',
          description: 'Test',
          version: '1.0.0',
        },
        tags: [{ name: 'Tag' }],
        paths: {
          '/': {
            get: {
              tags: ['Tag'],
              operationId: 'Tag_get',
              parameters: [
                {
                  name: 'Content-Type',
                  in: 'header',
                },
                {
                  name: 'Accept',
                  in: 'header',
                },
                {
                  name: 'Authorization',
                  in: 'header',
                },
              ],
              responses,
            },
          },
        },
        components: {},
      }
      const spec = await parseSpec(JSON.stringify(oas))
      const progress = new Progress({
        progress: {
          securityParameters: {
            'Content-Type': { header: false },
            Accept: { header: false },
            Authorization: { header: false },
          },
        },
        noSave: true,
      })
      await fixOas({
        spec,
        progress,
        alwaysYes: true,
        auto: true,
        ci: false,
        useAIForOperationId: false,
        useAIForTags: false,
        noInput: false,
      })
      expect(spec.spec).toMatchSnapshot()
    })

    it('response', async () => {
      const oas: Spec['spec'] = {
        openapi: '3.0.0',
        info: {
          title: 'Test API',
          description: 'Test',
          version: '1.0.0',
        },
        tags: [{ name: 'Tag' }],
        paths: {
          '/': {
            get: {
              tags: ['Tag'],
              operationId: 'Tag_get',
              parameters: [],
              responses: {
                '200': {
                  description: 'OK',
                  headers: {
                    'Content-Type': {},
                    Accept: {},
                    Authorization: {},
                  },
                },
              },
            },
          },
        },
        components: {},
      }
      const spec = await parseSpec(JSON.stringify(oas))
      const progress = new Progress({
        progress: {
          securityParameters: {
            'Content-Type': { header: false },
          },
        },
        noSave: true,
      })
      await fixOas({
        spec,
        progress,
        alwaysYes: true,
        auto: true,
        ci: false,
        useAIForOperationId: false,
        useAIForTags: false,
        noInput: false,
      })
      expect(spec.spec).toMatchSnapshot()
    })
  })
  describe('oas3-valid-media-example', () => {
    it('fix-number-example', async () => {
      const oas: Spec['spec'] = {
        openapi: '3.0.0',
        info: {
          title: 'Test API',
          description: 'Test',
          version: '1.0.0',
        },
        tags: [{ name: 'Tag' }],
        paths: {
          '/': {
            get: {
              tags: ['Tag'],
              operationId: 'Tag_get',
              parameters: [
                {
                  name: 'lat',
                  in: 'query',
                  schema: { type: 'number' },
                  example: '-115.16988',
                },
              ],
              requestBody: {
                content: {
                  'application/json': {
                    schema: {
                      type: 'number',
                      example: '100',
                    },
                  },
                },
              },
              responses: {
                '200': {
                  description: 'OK',
                  headers: {
                    'Content-Type': {},
                    Accept: {},
                    Authorization: {},
                  },
                },
              },
            },
          },
        },
      }
      const spec = await parseSpec(JSON.stringify(oas))
      const progress = new Progress({
        progress: {
          securityParameters: {
            lat: {
              query: false,
            },
          },
        },
        noSave: true,
      })
      await fixOas({
        spec,
        progress,
        alwaysYes: true,
        auto: true,
        ci: false,
        useAIForOperationId: false,
        useAIForTags: false,
        noInput: false,
      })
      expect(spec.spec).toMatchSnapshot()
    })
  })
  describe('oas3-schema', () => {
    it('fix mutual exclusiveness of example & examples field on media object', async () => {
      const oas: Spec['spec'] = {
        openapi: '3.0.0',
        info: {
          title: 'Test API',
          description: 'Test',
          version: '1.0.0',
        },
        tags: [{ name: 'Tag' }],
        paths: {
          '/': {
            get: {
              tags: ['Tag'],
              operationId: 'Tag_get',
              requestBody: {
                content: {
                  'application/json': {
                    schema: {
                      type: 'string',
                    },
                    example: '2',
                    examples: {
                      'example-0': { value: '1' },
                      'example-2': { value: '3' },
                    },
                  } as any,
                },
              },
              responses,
            },
          },
        },
        components: {},
      }
      const spec = await parseSpec(JSON.stringify(oas))
      const progress = new Progress({
        progress: {},
        noSave: true,
      })
      await fixOas({
        spec,
        progress,
        alwaysYes: true,
        auto: true,
        ci: false,
        useAIForOperationId: false,
        useAIForTags: false,
        noInput: false,
      })
      expect(spec.spec).toMatchSnapshot()
    })
  })
  describe('broken markdown links with whitespace between the [text] and (link)', () => {
    it('the whitespace is removed', async () => {
      const oas: Spec['spec'] = {
        openapi: '3.0.0',
        info: {
          title: 'Test API',
          description: 'Test [link]  (https://example.com)',
          version: '1.0.0',
        },
        tags: [{ name: 'Tag' }],
        paths: {
          '/': {
            get: {
              operationId: 'Tag_get',
              description: `Test [link]
  (https://example.com). Then [another link]    (https://example.com)`,
              responses,
            },
          },
        },
        components: {
          schemas: {
            Test: {
              description: `Test [link]     (https://example.com)`,
            },
          },
        },
      }
      const spec = await parseSpec(JSON.stringify(oas))
      const progress = new Progress({
        progress: {},
        noSave: true,
      })
      await fixOas({
        spec,
        progress,
        alwaysYes: true,
        auto: true,
        ci: false,
        useAIForOperationId: false,
        useAIForTags: false,
        noInput: false,
      })
      expect(spec.spec).toMatchSnapshot()
    })
  })
  describe('security.in fields with uppercase characters', () => {
    it('are lowercased', async () => {
      const oas: Spec['spec'] = {
        openapi: '3.0.0',
        info: {
          title: 'Test API',
          description: 'Test',
          version: '1.0.0',
        },
        tags: [{ name: 'Tag' }],
        paths: {
          '/': {
            get: {
              operationId: 'Tag_get',
              description: `Test`,
              responses,
            },
          },
        },
        components: {
          securitySchemes: {
            openapi_authorization: {
              type: 'apiKey',
              name: 'Authorization',
              in: 'HEADER',
            },
          },
        },
      }
      const spec = await parseSpec(JSON.stringify(oas))
      const progress = new Progress({
        progress: {},
        noSave: true,
      })
      await fixOas({
        spec,
        progress,
        alwaysYes: true,
        auto: true,
        ci: false,
        useAIForOperationId: false,
        useAIForTags: false,
        noInput: false,
      })
      expect(spec.spec).toMatchSnapshot()
    })
  })
  describe('ignore potential-incorrect-type', () => {
    const oas: Spec['spec'] = {
      openapi: '3.0.0',
      info: {
        title: 'Test API',
        description: 'Test',
        version: '1.0.0',
      },
      tags: [{ name: 'Tag' }],
      paths: {
        '/': {
          get: {
            operationId: 'Tag_get',
            requestBody: {
              content: {
                'application/json': {
                  schema: {
                    type: 'string',
                    example: '2',
                  },
                },
              },
            },
            responses,
          },
        },
      },
      components: {},
    }
    it('updates spec in place', async () => {
      const spec = await parseSpec(JSON.stringify(oas))
      const progress = new Progress({
        progress: { ignorePotentialIncorrectType: true },
        noSave: true,
      })
      await fixOas({
        spec,
        progress,
        alwaysYes: true,
        auto: true,
        ci: false,
        useAIForOperationId: false,
        useAIForTags: false,
        noInput: false,
      })
      expect(spec.spec).toMatchSnapshot()
    })
  })
  describe('duplicate-tag-names', () => {
    const oas: Spec['spec'] = {
      openapi: '3.0.0',
      info: {
        title: 'Test API',
        description: 'Test',
        version: '1.0.0',
      },
      tags: [
        { name: 'Tag' },
        { name: 'tag' },
        { name: 'Tag with space' },
        { name: 'tag with space' },
      ],
      paths: {
        '/': {
          get: {
            tags: ['Tag'],
            operationId: 'Tag_get',
            responses,
          },
          options: {
            tags: ['Tag with space'],
            operationId: 'Tag_options',
            responses,
          },
          delete: {
            tags: ['tag with space'],
            operationId: 'Tag_delete',
            responses,
          },
          patch: {
            tags: ['tag with space'],
            operationId: 'Tag_head',
            responses,
          },
          head: {
            tags: ['tag'],
            operationId: 'Tag_head',
            responses,
          },
          post: {
            tags: ['Tag'],
            operationId: 'Tag_post',
            responses,
          },
        },
      },
    }
    it('deduplicate', async () => {
      const spec = await parseSpec(JSON.stringify(oas))
      const progress = new Progress({
        progress: {},
        noSave: true,
      })
      await fixOas({
        spec,
        progress,
        alwaysYes: true,
        auto: true,
        ci: false,
        useAIForOperationId: false,
        useAIForTags: false,
        noInput: false,
      })
      expect(spec.spec).toMatchSnapshot()
    })
  })
  describe('object-with-no-properties', () => {
    const oas: Spec['spec'] = {
      openapi: '3.0.0',
      info: {
        title: 'Test API',
        description: 'Test',
        version: '1.0.0',
      },
      tags: [{ name: 'Tag' }],
      paths: {
        '/': {
          get: {
            operationId: 'Tag_get',
            requestBody: {
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    example: {
                      hello: 'world',
                      onePlus: 2,
                    },
                  },
                },
              },
            },
            responses: {
              '200': {
                description: 'OK',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      example: {
                        hello: 'world',
                        onePlus: 1,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      components: {},
    }
    it('generate schemas if not ignored', async () => {
      const spec = await parseSpec(JSON.stringify(oas))
      const progress = new Progress({
        progress: { ignoreObjectsWithNoProperties: false },
        noSave: true,
      })
      await fixOas({
        spec,
        progress,
        alwaysYes: true,
        auto: true,
        ci: false,
        useAIForOperationId: false,
        useAIForTags: false,
        noInput: false,
      })
      expect(spec.spec).toMatchSnapshot()
    })
    it('generate schemas if ignored', async () => {
      const spec = await parseSpec(JSON.stringify(oas))
      const progress = new Progress({
        progress: { ignoreObjectsWithNoProperties: true },
        noSave: true,
      })
      await fixOas({
        spec,
        progress,
        alwaysYes: true,
        auto: true,
        ci: false,
        useAIForOperationId: false,
        useAIForTags: false,
        noInput: false,
      })
      expect(spec.spec).toMatchSnapshot()
    })
  })
  describe('request media type objects with missing "schema" property', () => {
    it('are fixed', async () => {
      const oas: Spec['spec'] = {
        openapi: '3.0.0',
        info: {
          title: 'Test API',
          description: 'Test',
          version: '1.0.0',
        },
        tags: [{ name: 'Tag' }],
        paths: {
          '/': {
            get: {
              operationId: 'Tag_get',
              description: `Test`,
              requestBody: {
                $ref: '#/components/requestBodies/TagRequestBody',
              },
              responses,
            },
          },
        },
        components: {
          requestBodies: {
            TagRequestBody: {
              content: {
                'application/json': {
                  example: 'Should have a schema',
                },
              },
            },
          },
        },
      }
      const spec = await parseSpec(JSON.stringify(oas))
      const progress = new Progress({
        progress: {},
        noSave: true,
      })
      await fixOas({
        spec,
        progress,
        alwaysYes: true,
        auto: true,
        ci: false,
        useAIForOperationId: false,
        useAIForTags: false,
        noInput: false,
      })
      expect(spec.spec).toMatchSnapshot()
    })
  })
  describe('array schema with missing "items" property', () => {
    it('items propety is added', async () => {
      const oas: Spec['spec'] = {
        openapi: '3.0.0',
        info: {
          title: 'Test API',
          description: 'Test',
          version: '1.0.0',
        },
        tags: [{ name: 'Tag' }],
        paths: {
          '/': {
            get: {
              operationId: 'Tag_get',
              description: `Test`,
              requestBody: {
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        arrayProp: {
                          type: 'array',
                        } as any,
                      },
                    },
                  },
                },
              },
              responses,
            },
          },
        },
        components: {
          schemas: {
            MyArraySchema: {
              type: 'array',
            },
          } as any,
        },
      }
      const spec = await parseSpec(JSON.stringify(oas))
      const progress = new Progress({
        progress: {},
        noSave: true,
      })
      await fixOas({
        spec,
        progress,
        alwaysYes: true,
        auto: true,
        ci: false,
        useAIForOperationId: false,
        useAIForTags: false,
        noInput: false,
      })
      expect(spec.spec).toMatchSnapshot()
    })
  })
  it('undefined responses should not throw error', async () => {
    const oas: Spec['spec'] = {
      openapi: '3.0.0',
      info: {
        title: 'Test API',
        description: 'Test',
        version: '1.0.0',
      },
      tags: [{ name: 'Test' }],
      paths: {
        '/test': {
          get: {
            tags: ['Test'],
            operationId: 'Test_get',
            description: `Test`,
          },
        },
      },
    } as any
    const spec = await parseSpec(JSON.stringify(oas))
    const progress = new Progress({
      progress: {},
      noSave: true,
    })
    await fixOas({
      spec,
      progress,
      alwaysYes: true,
      auto: true,
      ci: false,
      useAIForOperationId: false,
      useAIForTags: false,
      noInput: true,
    })
    expect(spec.spec).toMatchSnapshot()
  })
  it('prioritize default response code', async () => {
    const oas: Spec['spec'] = {
      openapi: '3.0.0',
      info: {
        title: 'Test API',
        description: 'Test',
        version: '1.0.0',
      },
      tags: [{ name: 'Test' }],
      paths: {
        '/test': {
          get: {
            tags: ['Test'],
            operationId: 'Test_get',
            description: `Test`,
            responses: {
              '4XX': {
                description: 'Client Error',
                content: {
                  'application/json': {
                    schema: {
                      type: 'string',
                    },
                  },
                },
              },
              '5XX': {
                description: 'Server Error',
                content: {
                  'application/json': {
                    schema: {
                      type: 'string',
                    },
                  },
                },
              },
              default: {
                description: 'OK',
                content: {
                  'application/json': {
                    schema: {
                      type: 'string',
                    },
                  },
                },
              },
            },
          },
        },
      },
    }
    const spec = await parseSpec(JSON.stringify(oas))
    const progress = new Progress({
      progress: {},
      noSave: true,
    })
    await fixOas({
      spec,
      progress,
      alwaysYes: true,
      auto: true,
      ci: false,
      useAIForOperationId: false,
      useAIForTags: false,
      noInput: true,
    })
    expect(spec.spec).toMatchSnapshot()
  })
  it('(2|3|4|5)XX response codes', async () => {
    const oas: Spec['spec'] = {
      openapi: '3.0.0',
      info: {
        title: 'Test API',
        description: 'Test',
        version: '1.0.0',
      },
      tags: [{ name: 'Test' }],
      paths: {
        '/test': {
          get: {
            tags: ['Test'],
            operationId: 'Test_get',
            description: `Test`,
            responses: {
              '4XX': {
                description: 'Client Error',
                content: {
                  'application/json': {
                    schema: {
                      type: 'string',
                    },
                  },
                },
              },
              '5XX': {
                description: 'Server Error',
                content: {
                  'application/json': {
                    schema: {
                      type: 'string',
                    },
                  },
                },
              },
              '2XX': {
                description: 'OK',
                content: {
                  'application/json': {
                    schema: {
                      type: 'string',
                    },
                  },
                },
              },
            },
          },
        },
      },
    }
    const spec = await parseSpec(JSON.stringify(oas))
    const progress = new Progress({
      progress: {},
      noSave: true,
    })
    await fixOas({
      spec,
      progress,
      alwaysYes: true,
      auto: true,
      ci: false,
      useAIForOperationId: false,
      useAIForTags: false,
      noInput: true,
    })
    expect(spec.spec).toMatchSnapshot()
  })
  describe('enums with incorrect type', () => {
    it('are fixed', async () => {
      const oas: Spec['spec'] = {
        openapi: '3.0.0',
        info: {
          title: 'Test API',
          description: 'Test',
          version: '1.0.0',
        },
        tags: [{ name: 'Tag' }],
        paths: {
          '/': {
            get: {
              operationId: 'Tag_get',
              description: `Test`,
              requestBody: {
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        enum1: {
                          type: 'number',
                          enum: [1, 'two', 3],
                        },
                        enum2: {
                          type: 'string',
                          enum: [1, 2, 3],
                        },
                        enum3: {
                          type: 'string',
                          enum: [true],
                        },
                        enum4: {
                          type: 'integer',
                          enum: [1, 2, 3],
                        },
                        enum5: {
                          type: 'integer',
                          enum: [1, 2, 3.14],
                        },
                        enum6: {
                          enum: ['1', '2', '3'],
                          $ref: '#/components/schemas/StringSchema',
                        },
                      },
                    },
                  },
                },
              },
              responses,
            },
          },
        },
        components: {
          schemas: {
            StringSchema: {
              type: 'string',
            },
          },
        },
      }
      const spec = await parseSpec(JSON.stringify(oas))
      const progress = new Progress({
        progress: {},
        noSave: true,
      })
      await fixOas({
        spec,
        progress,
        alwaysYes: true,
        auto: true,
        ci: false,
        useAIForOperationId: false,
        useAIForTags: false,
        noInput: false,
      })
      expect(spec.spec).toMatchSnapshot()
    })
  })
})
