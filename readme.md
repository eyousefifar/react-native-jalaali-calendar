### installation:

`npm i react-native-jalaali-calendar --save`

### Usage:

 

```jsx

import { Jcalendar, JPicker } from "react-native-jalaali-calendar";
export default class App extends Component {
  render() {
    return (
      <View style={{flex : 1}}>
        <JPicker
          selectedDate={{
            year: 1397,
            month: 6,
            day: 13
          }}
          minYear={1300}
          maxYear={1450}
          getDate={date => {
            console.log(date);
          }}
          dismiss={() => {
            /* do something here */
          }}
        />
        <Jcalendar
          selectedDate={{
            year: 1397,
            month: 12,
            day: 15
          }}
          startYear={1300}
          endYear={1400}
        />
      </View>
    );
  }
}
```

note: Jcalendar and JPicker use flex as their layout, so user can manage layout more easily
