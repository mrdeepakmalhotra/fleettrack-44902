# Generated by Django 3.2.23 on 2024-05-15 12:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('organization', '0004_alter_inviteduser_username'),
        ('group', '0003_group_organization'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='group',
            options={'verbose_name': 'Group', 'verbose_name_plural': 'Groups'},
        ),
        migrations.AlterField(
            model_name='group',
            name='name',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterUniqueTogether(
            name='group',
            unique_together={('organization', 'name')},
        ),
    ]
