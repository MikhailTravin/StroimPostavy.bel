<?php
$msgs = [];
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
    $token = "7450301424:AAGrDenqgLQeratPcpqSar6ucL8yhDudoag";
    $chat_id = "-1002387088078";
 
    if (!empty($_POST['name']) && !empty($_POST['phone'])){
        $bot_url = "https://api.telegram.org/bot{$token}/";
        $urlForPhoto = $bot_url . "sendPhoto?chat_id=" . $chat_id;
 
        
 
        if (isset($_POST['name'])) {
          if (!empty($_POST['name'])){
            $name = "Имя: " . strip_tags($_POST['name']) . "%0A";
          }
        }   
 
        if (isset($_POST['phone'])) {
          if (!empty($_POST['phone'])){
            $phone = "Телефон: " . strip_tags($_POST['phone']) . "%0A";
          }
        }

        if (isset($_POST['type-work'])) {
          if (!empty($_POST['type-work'])){
            $typework = "Вид работ: " . strip_tags($_POST['type-work']) . "%0A";
          }
        }

        if (isset($_POST['amount-work'])) {
          if (!empty($_POST['amount-work'])){
            $amountwork = "Объем работы  (квадратных метров): " . strip_tags($_POST['amount-work']) . "%0A";
          }
        }

            // Формируем текст сообщения
            $txt = $typework . $amountwork . $name . $phone;
 
        $sendTextToTelegram = file_get_contents("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}");
        if ($output && $sendTextToTelegram) {
            $msgs['okSend'] = 'Спасибо за вашу заявку!';
            echo json_encode($msgs);
        } elseif ($sendTextToTelegram) {
            $msgs['okSend'] = 'Спасибо за вашу заявку!';
            echo json_encode($msgs);
          return true;
        } else {
            $msgs['err'] = 'Ошибка. Сообщение не отправлено!';
            echo json_encode($msgs);
            die('Ошибка. Сообщение не отправлено!');
        }
 
    } else {
        $msgs['err'] = 'Ошибка. Вы заполнили не все обязательные поля!';
        echo json_encode($msgs);;
    }
} else {
  header ("Location: /");
}
?>