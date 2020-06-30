import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';
import { from } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  total: number;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private cartService: CartService) {
                this.total = 0;
              }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    for ( let item of this.items)
    {
      this.total += item.Price;
    }

  }
}
