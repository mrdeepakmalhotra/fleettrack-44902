# Generated by Django 3.2.23 on 2024-05-13 11:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vehicle', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vehicle',
            name='asset_type',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='country_code',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='email',
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='equipment_status',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='euipment_type',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='firmware_version',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='fuel_capacity',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='fuel_cost',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='fuel_economy',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='fuel_type',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='group_pushin_id',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='ignition_input',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='imei_or_esn_number',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='licence_expiry',
            field=models.DateTimeField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='map_route_color',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='maximum_speed',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='phone',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='prev_recorder_id',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='prev_unique_id',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='recorder_id',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='recorder_id_last_changed',
            field=models.DateTimeField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='recorder_on',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='recorder_type',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='serial_number',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='server_id',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='short_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='unique_id',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='unique_id_last_change',
            field=models.DateTimeField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='vehicle_class',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='vehicle_make',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='vehicle_model',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='vin',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]