# Generated by Django 2.2.6 on 2019-10-10 12:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0004_auto_20191010_0024'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ingredientes',
            name='receta',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='ingredientes', to='main_app.Receta'),
        ),
        migrations.AlterField(
            model_name='pasos',
            name='receta',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='pasos', to='main_app.Receta'),
        ),
    ]