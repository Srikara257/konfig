import typing_extensions

from python_pydantic_any_schema_dict_response.paths import PathValues
from python_pydantic_any_schema_dict_response.apis.paths.simple_endpoint import SimpleEndpoint

PathToApi = typing_extensions.TypedDict(
    'PathToApi',
    {
        PathValues.SIMPLEENDPOINT: SimpleEndpoint,
    }
)

path_to_api = PathToApi(
    {
        PathValues.SIMPLEENDPOINT: SimpleEndpoint,
    }
)
