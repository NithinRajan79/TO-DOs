# Generated by Django 2.1.15 on 2021-07-29 20:58

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0018_auto_20210730_0211'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='event_time',
            field=models.TimeField(default=datetime.time(2, 28, 13, 710357)),
        ),
    ]
