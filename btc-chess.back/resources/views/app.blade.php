<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head prefix="my_namespace: https://kuberhub.com/">
        <meta charset="utf-8">

        <title inertia>{{ config('app.name', 'Chess-BTC') }}</title>

        <!-- TODO: Robots no index -->
        <meta name="robots" content="noindex,nofollow" />

        <!-- TODO: Allow http req with no network -->

        <!-- Open Graph meta -->
        <meta property="og:site_name" content="Home" />
        <meta property="og:title" content="Studio web-development and marketing in USA ⬆️ Magellan IT" />
       <meta
            property="og:description"
            content="Web-studio Magellan IT ✔️ SEO website promotion in USA ⭐ Services on creation and development of websites ✔️ SMM promotion in USA ✔️ Order web design services in USA ⭐ Web development studio Magellan IT ☎️ +44(747)05-98-772"
        />
        <meta property="og:locale" content="en" />
        <meta property="og:locale:alternate" content="uk" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kuberhub.com/" />
        <meta property="og:image" content="https://kuberhub.com/favicon/favicon.png" />
        <meta property="og:image:secure_url" content="https://kuberhub.com/favicon/favicon.png" />
        <meta property="og:image:width" content="32" />
        <meta property="og:image:height" content="32" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@magellan_it" />
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <!-- Fix IOS zoom to input on focus -->
        <!-- <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no , maximum-scale=1.0,user-scalable=no" /> -->

        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
        <meta content="true" name="HandheldFriendly" />
        <meta content="width" name="MobileOptimized" />
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="keywords" content="Magellan IT, SEO website" />
       <meta
            name="description"
            content="Web-studio Magellan IT ✔️ SEO website promotion in USA ⭐ Services on creation and development of websites ✔️ SMM promotion in USA ✔️ Order web design services in USA ⭐ Web development studio Magellan IT ☎️ +44(747)05-98-772"
        />
        <meta name="it-rating" content="it-rat-fa9ef9f8c2095cc94c5d33de60ee9bb3" />
        <meta name="theme-color" content="#ffffff" />

        <!-- [if IE]>
            <meta http-equiv="X-UA-Compatible" content="IE = edge" />
        <![endif] -->

        <!-- inject:font preload -->
        <!-- endinject:font preload -->

        <!-- <link rel="stylesheet" href="./app.css" /> -->
        <!-- [if lt IE 9]>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
        <![endif] -->

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="index-page">
        @inertia
    </body>
</html>
