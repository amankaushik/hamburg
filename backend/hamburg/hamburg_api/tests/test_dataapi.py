"""Test cases for the dataapi module"""

import json
import requests
import pytest
from hamburg_api.dataapi import SearchResultGetter, SimpleGetter, MovieDBResults
from .constants import MOCK_SEARCH_API

class TestSearchResultGetter():
    """Test class for SearchResultGetter"""

    @staticmethod
    def test_get_search_results(monkeypatch):
        """test method for _add_request_param"""
        #pylint: disable=protected-access
        def mockreturn(_endpoint):
            res = requests.Response()
            #pylint: disable=protected-access
            res._content = bytes(json.dumps(MOCK_SEARCH_API),\
                    encoding='utf-8')
            return res

        monkeypatch.setattr(requests, 'get', mockreturn)
        assert SearchResultGetter({'query': 'query'}).get_search_results()\
                == MOCK_SEARCH_API

class TestMovieDBResults():
    """Test class for MovieDBResults"""
    testdata = [
            ("https://my-app/api/v1/", "resource",\
                "10", "key", {"headers":{"client": 'client'}},\
                {"region":"us"}, "https://my-app/api/v1/resource&key=10"),
            ("https://my-app/api/v1/resource&key=10", "region", "us",\
                "https://my-app/api/v1/resource&key=10?region=us"),
        ]

    @staticmethod
    @pytest.mark.parametrize("resource, key, param, delim, kwargs, expected", testdata)
    def test_get_simple(resource, key, param, delim, kwargs, expected):
        """test method for get_simple"""
        returned = MovieDBResults.add_request_param(resource, key, param, delim, expected,\
                **kwargs)
        assert returned == expected

class TestSimpleGetter():
    """Test class for SimpleGetter"""
    testdata = [
            ("https://my-app/api/v1/", "resource",\
                "10", "key", {"headers":{"client": 'client'}},\
                {"region":"us"}, "https://my-app/api/v1/resource&key=10"),
            ("https://my-app/api/v1/resource&key=10", "region", "us",\
                "https://my-app/api/v1/resource&key=10?region=us"),
        ]
    
    @staticmethod
    @pytest.mark.parametrize("base, resource, key, key_text, kwargs, expected", testdata)
    def test_get_simple(base, resource, key, key_text, kwargs, monkeypatch):
        """test method for get_simple"""
        def mockreturn(_endpoint):
            res = requests.Response()
            #pylint: disable=protected-access
            res._content = bytes(json.dumps(MOCK_SEARCH_API),\
                    encoding='utf-8')
            return res

        monkeypatch.setattr(requests, 'get', mockreturn)

        assert SimpleGetter.get_simple(base, resource, key, key_text, **kwargs) ==\
                MOCK_SEARCH_API
