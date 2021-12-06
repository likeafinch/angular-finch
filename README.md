
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## Features

* [ASP.NET Core](http://www.dot.net/)
* [Entity Framework Core](https://docs.efproject.net/en/latest/)
    * Both Sql Server and Sql lite databases are supported (Check installation instrcutions for more details)
* [Angular](https://angular.io/)
* [Angular CLI](https://cli.angular.io/)
* Secure - with CSP and custom security headers
* [SignalR](https://github.com/aspnet/SignalR/) (Chat example)
* [SASS](http://sass-lang.com/) support
* [Best practices](https://angular.io/docs/ts/latest/guide/style-guide.html) in file and application organization for Angular.
* [Clean Architecture](https://github.com/ardalis/CleanArchitecture) for Asp.Net Core application.
* [PWA support](https://developers.google.com/web/progressive-web-apps/)
* [SSR (Server side rendering)](https://angular.io/guide/universal) - Coming soon...
* Fast Unit Testing with [Jest](https://facebook.github.io/jest/).
* E2E testing with [Protractor](http://www.protractortest.org).
* [Compodoc](https://compodoc.github.io/compodoc/) for Angular documentation
* Login and Registration functionality using [Asp.Net Identity & JWT](https://docs.asp.net/en/latest/security/authentication/identity.html)
* Token based authentication using [Openiddict](https://github.com/openiddict/openiddict-core)
     * Get public key access using: http://127.0.0.1:5000/.well-known/jwks
* Extensible User/Role identity implementation
* Social logins support with token based authentication, Follow [this](https://github.com/likeafinch/angular-finch/wiki/Social-Login-Setup) wiki page to see how it will work.
* [Angular dynamic forms](https://angular.io/docs/ts/latest/cookbook/dynamic-form.html) for reusability and to keep html code DRY.
* [Swagger](http://swagger.io/) as Api explorer (Visit url **http://127.0.0.1:5000/swagger** after running the application). More [details](https://github.com/domaindrivendev/Swashbuckle.AspNetCore)

## Pre-requisites

1. [.Net core sdk](https://www.microsoft.com/net/core#windows)
2. Either [VSCode](https://code.visualstudio.com/) with [C#](https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp) extension OR [Visual studio 2017](https://www.visualstudio.com/)
3. [Nodejs](https://nodejs.org/en/)

**Make sure you have Node version >= latest LTS and NPM >= latest LTS

## Installation
```
1. Clone the repo
    git clone https://github.com/likeafinch/angular-finch
2. Change directory
    cd AngularFinch
3. Run Server
    dotnet build AngularFinch.sln
