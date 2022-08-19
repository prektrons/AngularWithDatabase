from django.db import models


# Create your models here.
class Tutorial(models.Model):
    name= models.CharField(max_length=200, blank=False, default='')
    club_teams = models.CharField(max_length=200, blank=False, default='')
    position = models.CharField(max_length=200, blank=False, default='')
    nationality=models.CharField(max_length=200, blank=False, default='')
    awards=models.CharField(max_length=200, blank=False, default='')
    leagues=models.CharField(max_length=200, blank=False, default='')
