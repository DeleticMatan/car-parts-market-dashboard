import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material'

@Injectable({
  providedIn: 'root'
})

export class HelperService {
  public spinnerDiameter: number = 40
  public backendUri: string = 'https://auto-delovi.herokuapp.com'
  constructor(public snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string, duration: number = 5000) {
    this.snackBar.open(message, action, {
      duration,
      panelClass: ['blue-snackbar']
    })
  }
}
