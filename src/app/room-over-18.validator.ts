import { Injectable } from '@angular/core';
import { FormGroup, ValidatorFn } from '@angular/forms';
import { Room } from './rooms';

@Injectable({ providedIn: 'root' })
export class RoomOver18Validator {
  public onlyAccessRoomsOver18(minPrice: number): ValidatorFn {
    return (formGroup: FormGroup) => {
      const priceControl = formGroup.get('price');
      const roomControl = formGroup.get('room');

      if (!priceControl || !roomControl) {
        return null;
      }

      const priceValue = priceControl.value;

      if (!priceValue) {
        return null;
      }

      if (priceValue >= minPrice) {
        return null;
      }

      const roomsValue = roomControl.value as Room;

      if (!roomsValue) {
        return null;
      }

      if (roomsValue.value === 'room-2' || roomsValue.value === 'room-3') {
        return { roomOver50Dollars: true };
      }

      return null;
    };
  }
}
