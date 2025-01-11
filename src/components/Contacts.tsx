import React from 'react';
import { contacts } from '@/utils/data'; // Mengimpor data kontak

const Contacts = () => {
  return (
    <section id="contacts" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-black text-3xl font-bold mb-8 text-center">
          Contact Information
        </h2>
        <div className="text-gray-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-4">{contact.icon}</span>
                <h3 className="text-xl font-semibold">{contact.type}</h3>
              </div>
              {contact.value.startsWith('http') ? (
                <a
                  href={contact.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-2 block"
                >
                  View Profile
                </a>
              ) : (
                <p className="text-gray-700">{contact.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
