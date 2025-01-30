/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Dashboard` | `/Dashboard`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Distribution` | `/Distribution`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/explore` | `/explore`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/screens/AllData` | `/screens/AllData`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/screens/RegistrationForm` | `/screens/RegistrationForm`; params?: Router.UnknownInputParams; } | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/Dashboard` | `/Dashboard`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/Distribution` | `/Distribution`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/explore` | `/explore`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/screens/AllData` | `/screens/AllData`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/screens/RegistrationForm` | `/screens/RegistrationForm`; params?: Router.UnknownOutputParams; } | { pathname: `/+not-found`, params: Router.UnknownOutputParams & {  } };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/Dashboard${`?${string}` | `#${string}` | ''}` | `/Dashboard${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/Distribution${`?${string}` | `#${string}` | ''}` | `/Distribution${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/explore${`?${string}` | `#${string}` | ''}` | `/explore${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/screens/AllData${`?${string}` | `#${string}` | ''}` | `/screens/AllData${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/screens/RegistrationForm${`?${string}` | `#${string}` | ''}` | `/screens/RegistrationForm${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Dashboard` | `/Dashboard`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Distribution` | `/Distribution`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/explore` | `/explore`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/screens/AllData` | `/screens/AllData`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/screens/RegistrationForm` | `/screens/RegistrationForm`; params?: Router.UnknownInputParams; } | `/+not-found` | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
    }
  }
}
