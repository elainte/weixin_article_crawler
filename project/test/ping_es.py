from elasticsearch import Elasticsearch
from elasticsearch.connection import RequestsHttpConnection

client = Elasticsearch(
    hosts=[{'host':'http://localhost', 'port':9200}], 
    transport_class=RequestsHttpConnection
)
client.ping()