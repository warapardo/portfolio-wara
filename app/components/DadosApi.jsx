'use client';

import { useState, useEffect } from 'react';

export default function DadosAPI() {
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/api/api/v1/perfil')
            .then(res => res.json())
            .then(data => setApiData(data))
            .catch(err => console.log('API em modo de desenvolvimento'));
    }, []);

    if (!apiData) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            background: '#007bff',
            color: 'white',
            padding: '10px 15px',
            borderRadius: '5px',
            fontSize: '12px',
            zIndex: 1000,
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
        }}>
            ✅ Dados da API carregados
            <br />
            <small>Spring Boot + Java 25</small>
        </div>
    );
}