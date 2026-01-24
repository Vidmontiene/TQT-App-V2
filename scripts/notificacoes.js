import * as Notifications from 'expo-notifications';
import * as Linking from 'expo-linking';

// Pede permissão para notificações
export const pedirPermissao = async () => {
  const { status } = await Notifications.getPermissionsAsync();

  if (status !== 'granted') {
    await Notifications.requestPermissionsAsync();
  }
  console.log(situacao());
};

// Abre configurações
export const abrirConfiguracoes = async () => {
  Linking.openSettings();
  console.log(situacao());
};

// Retorna situação da notificação
export const situacao = async () => {
  const { status } = await Notifications.getPermissionsAsync();
  if (status === 'granted'){
    return "Permitido";
  }
  else if (status === 'undetermined') {
    return 'Ainda não perguntado';
  }
  else {
    return "Bloqueado";
  }
};

// Envia a notificação
export const agendarNotificacao = async ( titulo, corpo, dataHora ) => {

  if (dataHora <= new Date()) return null; // não agenda passado

  const notificacao = await Notifications.scheduleNotificationAsync({
    content: {
      title: titulo,
      body: corpo,
      sound: true,
      channelId: 'default'
    },
    trigger: {
      date: dataHora,
      type: 'date',
      channelId: 'default'
    }
  });

  const todas = await Notifications.getAllScheduledNotificationsAsync();
  console.log('NOTIFICAÇÕES:', todas);
  return notificacao;
};

// Cancela notificação
export const cancelarNotificacao = async ( notificationId ) => {
  if (!notificationId) return;
  await Notifications.cancelScheduledNotificationAsync(notificationId);
};


