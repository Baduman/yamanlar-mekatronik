'use client';

import { useState } from 'react';

export default function SimpleTestPage() {
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult('');

    try {
      console.log('=== BASİT TEST BAŞLIYOR ===');
      console.log('Gönderilecek isim:', name);
      
      const testData = {
        name: name,
        email: 'test@test.com',
        phone: '5551234567',
        company: 'Test Şirketi',
        message: 'Bu basit bir test mesajıdır.'
      };

      console.log('Test data:', testData);
      
      // Firebase Functions URL'sine direkt istek gönder
      const response = await fetch('https://us-central1-yamanlar-mekatronik.cloudfunctions.net/sendContactEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData),
      });
      
      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
      
      const data = await response.json();
      console.log('Response data:', data);
      
      setResult(JSON.stringify(data, null, 2));
      
    } catch (error) {
      console.error('Test error:', error);
      setResult(`Error: ${error}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="max-w-md mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Basit Mail Test</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                İsim Soyisim *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="İsminizi girin"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 disabled:opacity-50 font-medium"
            >
              {isSubmitting ? 'Gönderiliyor...' : 'Mail Gönder'}
            </button>
          </form>
          
          {result && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Sonuç:</h2>
              <pre className="bg-gray-100 p-4 rounded-lg border overflow-auto text-sm">
                {result}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 