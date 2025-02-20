# coding: utf-8

"""


    Generated by: https://openapi-generator.tech
"""

import unittest
from unittest.mock import patch

import urllib3

import demo_client
from demo_client.paths.pet_pet_id import delete  # noqa: E501
from demo_client import configuration, schemas, api_client

from .. import ApiTestMixin


class TestPetPetId(ApiTestMixin, unittest.TestCase):
    """
    PetPetId unit test stubs
        Deletes a pet  # noqa: E501
    """
    _configuration = configuration.Configuration()

    def setUp(self):
        used_api_client = api_client.ApiClient(configuration=self._configuration)
        self.api = delete.ApiFordelete(api_client=used_api_client)  # noqa: E501

    def tearDown(self):
        pass

    response_status = 400
    response_body = ''


if __name__ == '__main__':
    unittest.main()
