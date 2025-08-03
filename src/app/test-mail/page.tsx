'use client';

import { useState } from 'react';
import { sendContactEmail } from '@/lib/emailService';

export default function TestMailPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState('');

  const handleTest = async () => {
    setIsSubmitting(true);
    setResult('');

    try {
      console.log('Test başlıyor...');
      
      const testData = {
        name: 'Test Kullanıcı',
        email: 'test@test.com',
        phone: '5551234567',
        company: 'Test Şirketi',
        subject: 'Test Konusu',
        message: 'Bu bir test mesajıdır.'
      };

      console.log('Test data:', testData);
      
      const response = await sendContactEmail(testData);
      
      console.log('Response:', response);
      setResult(JSON.stringify(response, null, 2));
      
    } catch (error) {
      console.error('Test error:', error);
      setResult(`Error: ${error}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Mail Test Sayfası</h1>
        
        <button
          onClick={handleTest}
          disabled={isSubmitting}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 disabled:opacity-50"
        >
          {isSubmitting ? 'Test ediliyor...' : 'Mail Test Et'}
        </button>
        
        {result && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Sonuç:</h2>
            <pre className="bg-white p-4 rounded-lg border overflow-auto">
              {result}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
} 