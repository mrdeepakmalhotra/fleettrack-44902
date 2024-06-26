# Generated by Django 3.2.23 on 2024-05-10 12:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('organization', '0002_inviteduser_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='inviteduser',
            name='email',
            field=models.EmailField(max_length=254, unique=True),
        ),
        migrations.AlterUniqueTogether(
            name='inviteduser',
            unique_together=set(),
        ),
    ]
