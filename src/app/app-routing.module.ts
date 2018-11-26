import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from 'src/product/product.component';
import { InvoiceComponent } from 'src/invoice/invoice.component';

const routes: Routes = 
[
{
  path:'Product',component:ProductComponent
},
{
  path:'Inventory',component:InvoiceComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
