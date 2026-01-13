<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Reset Password Mail</title>
</head>

<body>
    <h1>Reset Password Mail</h1>
    <p>Click the button below to reset your password:</p>
    <a href="{{ $url }}">Reset Password</a>
    <p>If reset password button is not working, just click or copy and paste the following URL into your browser:</p>
    <a href="{{ $url }}" target="_blank">{{ $url }}</a>
</body>

</html>
