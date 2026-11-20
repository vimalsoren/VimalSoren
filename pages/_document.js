import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(){try{var _f=window.fetch;var _cur=_f;Object.defineProperty(window,'fetch',{get:function(){return _cur;},set:function(v){_cur=v;},configurable:true,enumerable:true});}catch(e){}try{var isExt=function(ev){var s=(ev&&(ev.filename||(ev.error&&ev.error.stack)||(ev.reason&&ev.reason.stack)||ev.message||''))+'';return s.indexOf('chrome-extension://')!==-1||s.indexOf('moz-extension://')!==-1||s.indexOf('safari-extension://')!==-1;};window.addEventListener('error',function(ev){if(isExt(ev)){ev.preventDefault();ev.stopImmediatePropagation();}},true);window.addEventListener('unhandledrejection',function(ev){if(isExt(ev)){ev.preventDefault();ev.stopImmediatePropagation();}},true);}catch(e){}})();`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
