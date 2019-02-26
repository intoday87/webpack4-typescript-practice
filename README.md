# webpack4 + typescript + jsx practice

[route-base code splitting](https://github.com/ReactTraining/react-router/issues/4354)

```jsx
<route component={A} />
```
대신
```jsx
<route render={() => <A />} />
```
로 하는 이유

[이슈 링크](https://github.com/ReactTraining/react-router/issues/4354) => 4.4에서 패치될 예
