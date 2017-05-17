export class App {
  message: string = 'Select an Option!';
  items: ClickableItem[] = [
    { id: 1, displayName: 'firstItem' },
    { id: 2, displayName: 'secondItem' },
    { id: 3, displayName: 'thirdItem' },
  ];
}

export class ClickableItem {
  displayName: string;
  id: number;
}
