from django.contrib import admin
from django.utils.html import format_html

from .models import *


@admin.register(Car)
class CarAdmin(admin.ModelAdmin):
    list_display = ('model', 'location', 'engine', 'body', 'fuel', 'mileage', 'show_ria_link', 'show_ab_link', 'createdAt', 'updatedAt')
    readonly_fields = ['price']
    # def show_rst_link(self, obj):
    #     return format_html("<a href='{url}' target='_blank'>{url}</a>", url=obj.rst_link)
    # show_rst_link.short_description = "rst link"

    def show_ria_link(self, obj):
        return format_html("<a href='{url}' target='_blank'>{url}</a>", url=obj.ria_link)
    show_ria_link.short_description = "ria link"

    def show_ab_link(self, obj):
        return format_html("<a href='{url}' target='_blank'>{url}</a>", url=obj.ab_link)
    show_ab_link.short_description = "ab link"


admin.site.register(Profile)
admin.site.register(Location)
admin.site.register(SellerPhone)
