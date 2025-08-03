// Firebase Functions URL'lerini kullanarak e-posta gönderme
export const sendEmail = async (endpoint: string, data: Record<string, unknown>) => {
  const url = `https://us-central1-yamanlar-mekatronik.cloudfunctions.net/${endpoint}`;
  
  console.log('EmailService - Gönderilecek URL:', url);
  console.log('EmailService - Gönderilecek data:', data);
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    console.log('EmailService - Response status:', response.status);
    console.log('EmailService - Response headers:', response.headers);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('EmailService - HTTP Error:', response.status, errorText);
      return { success: false, message: `HTTP Error: ${response.status}` };
    }
    
    const result = await response.json();
    console.log('EmailService - Response result:', result);
    
    return { success: result.success, message: result.message };
  } catch (error) {
    console.error('EmailService - Fetch error:', error);
    return { success: false, message: 'E-posta gönderilirken bir hata oluştu. Lütfen tekrar deneyin.' };
  }
};

export const sendQuoteEmail = async (formData: Record<string, string>) => {
  console.log('sendQuoteEmail çağrıldı:', formData);
  return await sendEmail('sendQuoteEmail', formData);
};

export const sendContactEmail = async (formData: Record<string, string>) => {
  console.log('sendContactEmail çağrıldı:', formData);
  return await sendEmail('sendContactEmail', formData);
}; 