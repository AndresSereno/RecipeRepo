# Generated by Django 2.2.6 on 2019-10-10 02:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0002_auto_20191009_1825'),
    ]

    operations = [
        migrations.AlterField(
            model_name='valoracion',
            name='fecha',
            field=models.DateTimeField(auto_now_add=True, verbose_name='Fecha Valoracion'),
        ),
    ]
