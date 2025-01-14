# coding: utf-8

"""
    splitit-web-api-v3

    Splitit's Web API

    The version of the OpenAPI document: 1.0.0
    Generated by: https://konfigthis.com
"""

from datetime import date, datetime  # noqa: F401
import decimal  # noqa: F401
import functools  # noqa: F401
import io  # noqa: F401
import re  # noqa: F401
import typing  # noqa: F401
import typing_extensions  # noqa: F401
import uuid  # noqa: F401

import frozendict  # noqa: F401

from python_splitit_client import schemas  # noqa: F401


class CardType(
    schemas.EnumBase,
    schemas.StrSchema
):
    """
    This class is auto generated by Konfig (https://konfigthis.com)
    """


    class MetaOapg:
        enum_value_to_name = {
            "Credit": "CREDIT",
            "Debit": "DEBIT",
            "Charge": "CHARGE",
            "Other": "OTHER",
            "Prepaid": "PREPAID",
            "VisaDeferredDebit": "VISA_DEFERRED_DEBIT",
            "NetworkOnly": "NETWORK_ONLY",
        }
    
    @schemas.classproperty
    def CREDIT(cls):
        return cls("Credit")
    
    @schemas.classproperty
    def DEBIT(cls):
        return cls("Debit")
    
    @schemas.classproperty
    def CHARGE(cls):
        return cls("Charge")
    
    @schemas.classproperty
    def OTHER(cls):
        return cls("Other")
    
    @schemas.classproperty
    def PREPAID(cls):
        return cls("Prepaid")
    
    @schemas.classproperty
    def VISA_DEFERRED_DEBIT(cls):
        return cls("VisaDeferredDebit")
    
    @schemas.classproperty
    def NETWORK_ONLY(cls):
        return cls("NetworkOnly")
