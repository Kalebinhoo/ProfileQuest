export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { questId, body, token } = req.body || {};
    const auth = token || req.headers.authorization;

    if (!auth) return res.status(400).json({ error: 'Token ausente' });
    if (!questId) return res.status(400).json({ error: 'questId ausente' });

    const props = {
        os: 'Windows',
        browser: 'Discord Client',
        release_channel: 'stable',
        client_version: '1.0.9236',
        os_version: '10.0.19045',
        os_arch: 'x64',
        app_arch: 'x64',
        system_locale: 'pt-BR',
        has_client_mods: false,
        browser_user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) discord/1.0.9236 Chrome/124.0.6367.243 Electron/30.4.0 Safari/537.36',
        browser_version: '30.4.0',
        client_build_number: 539951,
        native_build_number: 81687,
        client_event_source: null
    };

    try {
        const r = await fetch(`https://discord.com/api/v10/quests/${questId}/heartbeat`, {
            method: 'POST',
            headers: {
                'Authorization': auth,
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) discord/1.0.9236 Chrome/124.0.6367.243 Electron/30.4.0 Safari/537.36',
                'X-Super-Properties': Buffer.from(JSON.stringify(props)).toString('base64'),
                'X-Discord-Locale': 'pt-BR',
                'X-Discord-Timezone': 'America/Sao_Paulo',
                'Origin': 'https://discord.com',
                'Referer': 'https://discord.com/channels/@me'
            },
            body: JSON.stringify(body || {})
        });

        const text = await r.text();
        let data = {};
        try { data = JSON.parse(text); } catch {}

        return res.status(r.status).json(data);
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}
