
declare module "markscript-koa/dist/lib/index"{
    import tmp = require('dist/lib/index');
    export = tmp;
}

declare module "markscript-koa/dist/lib/server"{
    import tmp = require('dist/lib/server');
    export = tmp;
}

declare module "markscript-koa"{
    import tmp = require('dist/lib/index');
    export = tmp;
}