'use client';

import { useState, useEffect } from 'react';

export default function PerfilAPI() {
    const [perfil, setPerfil] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // URL do Spring Boot
    const API_URL = 'http://localhost:8080/api/api/v1/perfil';

    useEffect(() => {
        async function fetchPerfil() {
            try {
                const response = await fetch(API_URL);
                
                if (!response.ok) {
                    throw new Error(`Erro HTTP: ${response.status}`);
                }
                
                const data = await response.json();
                setPerfil(data);
            } catch (err) {
                console.error('Erro na API:', err);
                setError('Não foi possível carregar os dados da API');
            } finally {
                setLoading(false);
            }
        }

        fetchPerfil();
    }, []);

    // Se loading ou erro, retorna fallback discreto
    if (loading || error) {
        return null; // Não mostra nada, mantém seus dados estáticos
    }

    // Componente invisível - só para demonstrar que API está funcionando
    return (
        <div style={{ display: 'none' }}>
            {/* Componente invisível - API funcionando */}
            <div data-api-status="success" data-loaded-at={new Date().toISOString()} />
        </div>
    );
}