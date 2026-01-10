<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>User Verification Mail</title>
</head>

<body>
    <h1>User Verification Mail</h1>
    <p>Click the button below to verify your email:</p>
    <a href="{{ $url }}">Verify Email</a>
    <p>If verification button is not working, just click or copy and paste the following URL into your browser:</p>
    <a href="{{ $url }}" target="_blank">{{ $url }}</a>
</body>

</html>
