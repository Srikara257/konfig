# coding: utf-8

"""
    NewsCatcher-V3 Production API

    <img src='https://uploads-ssl.webflow.com/6429857b17973b636c2195c5/646c6f1eb774ff2f2997bec5_newscatcher_.svg' width='286' height='35' /> <br>  <br>Visit our website  <a href='https://newscatcherapi.com'>https://newscatcherapi.com</a>

    The version of the OpenAPI document: 3.2.16
    Contact: maksym@newscatcherapi.com
    Generated by: https://konfigthis.com
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING


class RequiredSearchRequest(TypedDict):
    q: str


class OptionalSearchRequest(TypedDict, total=False):
    search_in: str

    predefined_sources: typing.Union[bool, date, datetime, dict, float, int, list, str, None]

    sources: typing.Union[bool, date, datetime, dict, float, int, list, str, None]

    not_sources: typing.Union[bool, date, datetime, dict, float, int, list, str, None]

    lang: typing.Union[bool, date, datetime, dict, float, int, list, str, None]

    not_lang: typing.Union[bool, date, datetime, dict, float, int, list, str, None]

    countries: typing.Union[bool, date, datetime, dict, float, int, list, str, None]

    not_countries: typing.Union[bool, date, datetime, dict, float, int, list, str, None]

    not_author_name: typing.Union[bool, date, datetime, dict, float, int, list, str, None]

    from_: typing.Union[str, datetime]

    to_: typing.Union[str, datetime]

    published_date_precision: str

    by_parse_date: bool

    sort_by: str

    ranked_only: str

    from_rank: int

    to_rank: int

    is_headline: bool

    is_paid_content: bool

    parent_url: typing.Union[bool, date, datetime, dict, float, int, list, str, None]

    all_links: typing.Union[bool, date, datetime, dict, float, int, list, str, None]

    all_domain_links: typing.Union[bool, date, datetime, dict, float, int, list, str, None]

    word_count_min: int

    word_count_max: int

    page: int

    page_size: int

    clustering_variable: str

    clustering_enabled: bool

    clustering_threshold: typing.Union[int, float]

    include_nlp_data: bool

    has_nlp: bool

    theme: str

    not_theme: str

    ORG_entity_name: str

    PER_entity_name: str

    LOC_entity_name: str

    MISC_entity_name: str

    title_sentiment_min: typing.Union[int, float]

    title_sentiment_max: typing.Union[int, float]

    content_sentiment_min: typing.Union[int, float]

    content_sentiment_max: typing.Union[int, float]

    iptc_tags: typing.Union[bool, date, datetime, dict, float, int, list, str, None]

    not_iptc_tags: typing.Union[bool, date, datetime, dict, float, int, list, str, None]

    source_name: typing.Union[bool, date, datetime, dict, float, int, list, str, None]

    iab_tags: typing.Union[bool, date, datetime, dict, float, int, list, str, None]

    not_iab_tags: typing.Union[bool, date, datetime, dict, float, int, list, str, None]

    exclude_duplicates: bool

class SearchRequest(RequiredSearchRequest, OptionalSearchRequest):
    pass
