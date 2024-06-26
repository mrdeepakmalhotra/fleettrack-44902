# Generated by Django 3.2.23 on 2024-05-24 08:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fleet_tag', '0003_alter_fleettag_fleet_tag_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fleettag',
            name='distance_traveled',
            field=models.CharField(blank=True, help_text='Distance traveled in miles', max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='fleettag',
            name='last_event_time',
            field=models.DateTimeField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='fleettag',
            name='temperature',
            field=models.CharField(blank=True, help_text='Temperature in Fahrenheit', max_length=255, null=True),
        ),
    ]
