# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html


class MoviePipeline(object):
    def process_item(self, item, spider):
        # return item
        with open("my_meiju.txt", 'a') as fp:
            #fp.write(item['name'].encode("utf8") + '\n')
            fp.write(str(item['name'].encode('utf-8'))+"\n")
