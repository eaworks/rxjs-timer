import { timer, Observable } from 'rxjs';

console.log('Uygulama basladi');
const subscription = timer(2000).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
});
setTimeout(() => {
  subscription.unsubscribe();
  console.log('Unsubscribe');
}, 3000);
