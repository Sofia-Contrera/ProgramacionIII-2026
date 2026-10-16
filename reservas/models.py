from django.db import models

class ActividadDeportiva(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    lugar = models.CharField(max_length=150)
    cupo = models.IntegerField()

    def __str__(self):
        return self.nombre


class Horario(models.Model):
    actividad = models.ForeignKey(ActividadDeportiva, on_delete=models.CASCADE, related_name='horarios')
    dia = models.CharField(max_length=50)
    hora_inicio = models.TimeField()
    hora_fin = models.TimeField()

    def __str__(self):
        return f"{self.actividad.nombre} - {self.dia} ({self.hora_inicio} - {self.hora_fin})"


class Inscripcion(models.Model):
    ESTADO_CHOICES = [
        ('Activa', 'Activa'),
        ('Cancelada', 'Cancelada'),
    ]

    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    dni = models.CharField(max_length=20)
    fecha_inscripcion = models.DateTimeField(auto_now_add=True)
    estado = models.CharField(max_length=20, choices=ESTADO_CHOICES, default='Activa')
    horario = models.ForeignKey(Horario, on_delete=models.CASCADE, related_name='inscripciones')

    def __str__(self):
        return f"{self.apellido}, {self.nombre} - {self.horario}"