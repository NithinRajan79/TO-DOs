# Generated by Django 2.1.15 on 2021-08-24 16:37

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0041_auto_20210824_1631'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='event_time',
            field=models.TimeField(default=datetime.time(22, 7, 22, 505998)),
        ),
    ]
