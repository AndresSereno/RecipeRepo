from django.db import models

# Create your models here.
class Unidades(models.Model):
    nombre = models.CharField(max_length=64, verbose_name='Nombre')
    abreviacion = models.CharField(max_length=4, verbose_name='Abreviacion')

class Receta(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    nombre = models.CharField(max_length=64,verbose_name='Nombre')
    porciones = models.PositiveIntegerField(verbose_name='Cantidad de porciones')


class Ingredientes(models.Model):
    descripcion = models.CharField(max_length=64, verbose_name='Descripcion')
    cantidad = models.DecimalField(max_digits=4, decimal_places=2, verbose_name='Value', null=True)
    unidad = models.ForeignKey(Unidades, null=False, on_delete=models.CASCADE)
    receta = models.ForeignKey(Receta, on_delete=models.CASCADE, default=None, related_name='ingredientes')

class Pasos(models.Model):
    orden = models.PositiveIntegerField(verbose_name='Orden', null=False)
    descripcion = models.TextField(verbose_name='Descripcion')
    receta = models.ForeignKey(Receta, on_delete=models.CASCADE, default=None, related_name='pasos')

class Valoracion(models.Model):
    fecha=models.DateTimeField(auto_now_add=True,verbose_name='Fecha Valoracion')
    valoracion = models.PositiveIntegerField(verbose_name='Valoracion')
    receta = models.ForeignKey(Receta, on_delete=models.CASCADE, default=None, related_name='valoraciones')



