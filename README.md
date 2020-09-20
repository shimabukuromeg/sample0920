#### sample0920
- react native navigationのお勉強

#### めも

- Navigationの仕組み知りたくて、この本の7章のサンプルコード写経した
  - [React Native ～JavaScriptによるiOS／Androidアプリ開発の実践：書籍案内｜技術評論社](https://gihyo.jp/book/2020/978-4-297-11391-9)

- モバイルアプリの画面遷移は基本的に以下の３つを使って表現できそう？
   - Stack
   - Drawer
   - Tab
- 以下、ルーティング（画面遷移）のざっくり流れ   
  - createXXXNavigator()で、インスタンスを作って、ルーティングを定義する
  - XXX.NavigatorとXXXX.Screenで画面を定義する。（XXXX.ScreenをXXX.Navigatorで囲む。画面遷移のための構造を作る）
  - 最後に、ルーティングを束ねるための、NavigationContainerで、作ったルーティングを囲ってあげる。
  - サンプルコード
     - Stack
        - https://github.com/shimabukuromeg/sample0920/commit/cfa08dfc1d40164500755a3256b2c6c3d48af064
     - Drawer
        - https://github.com/shimabukuromeg/sample0920/commit/76580d686e7eb118abf60bf17351b69ca16cbd9b
     - Tab
        - https://github.com/shimabukuromeg/sample0920/commit/5c56463e510598abb140dc546f186e73727d2e20
