import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export interface User {
  id?: number;
  name: string;
  email: string;
}
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.scss'
})
export class UserAddComponent {
  userForm: FormGroup;
  users: User[] = [];
  successMessage: string | null = null;
  editingUserIndex: number | null = null; 

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const userData: User = { 
        ...this.userForm.value, 
        id: this.users.length + 1 
      };

      if (this.editingUserIndex !== null) {
        this.users[this.editingUserIndex] = userData;
        this.successMessage = "Utilisateur mis à jour avec succès!";
        this.editingUserIndex = null; // Reset the editing user index
      } else {
        // Add new user
        this.users.push(userData);
        this.successMessage = "Utilisateur ajouté avec succès!";
      }

      setTimeout(() => {
        this.successMessage = null;
      }, 3000);

      this.userForm.reset();  // Reset the form after submission
    }
  }

  onEdit(index: number) {
    const userToEdit = this.users[index];
    this.userForm.patchValue({
      name: userToEdit.name,
      email: userToEdit.email
    });
    this.editingUserIndex = index;  // Set the editing user index
  }

  onDelete(index: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      this.users.splice(index, 1);  // Remove user from the list
      this.successMessage = "Utilisateur supprimé avec succès!";
      setTimeout(() => {
        this.successMessage = null;
      }, 3000);
    }
  }
}
