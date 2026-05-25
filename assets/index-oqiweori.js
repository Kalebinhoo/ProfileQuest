(function(){
    document.addEventListener('contextmenu',function(e){e.preventDefault()});
    document.addEventListener('keydown',function(e){
        if(e.key==='F12'){e.preventDefault();return false}
        if(e.ctrlKey&&e.shiftKey&&['I','i','J','j','C','c'].includes(e.key)){e.preventDefault();return false}
        if(e.ctrlKey&&['U','u'].includes(e.key)){e.preventDefault();return false}
        if(e.ctrlKey&&['S','s'].includes(e.key)){e.preventDefault();return false}
    });
    var threshold=160,devtoolsOpen=false;
    setInterval(function(){
        var w=window.outerWidth-window.innerWidth>threshold;
        var h=window.outerHeight-window.innerHeight>threshold;
        if((w||h)&&!devtoolsOpen){devtoolsOpen=true;document.body.innerHTML='';document.body.style.background='#09090b'}
    },500);
    setInterval(function(){(function(){return false}['constructor']('debugger')['call']())},3000);
})();

document.addEventListener('DOMContentLoaded',function(){
    var BM="javascript:(function(){var uid='pq'+Date.now();function rm(){var e=document.getElementById(uid);if(e)e.remove();}var token=null;try{var f=document.createElement('iframe');f.style.display='none';document.body.appendChild(f);try{token=JSON.parse(f.contentWindow.localStorage.token||'null');}catch(x){}f.remove();}catch(x){}if(!token){try{var req;window.webpackChunkdiscord_app.push([[Symbol()],{},function(r){req=r;}]);Object.values(req.c).forEach(function(m){if(token||!m||!m.exports)return;[m.exports,m.exports.default,m.exports.Z,m.exports.ZP].forEach(function(x){if(token||!x||typeof x.getToken!=='function')return;try{var t=x.getToken();if(t&&t.length>20)token=t;}catch(x){}});});}catch(x){}}var wrap=document.createElement('div');wrap.id=uid;wrap.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,0.82);z-index:99999;display:flex;align-items:center;justify-content:center;font-family:system-ui,sans-serif;';if(!token){wrap.innerHTML='<div style=\"background:#1e1f22;border:1px solid #ed4245;border-radius:12px;padding:28px 32px;max-width:380px;width:90%;text-align:center;\"><p style=\"color:#ed4245;font-weight:700;font-size:15px;margin-bottom:8px;\">Token n\\u00e3o encontrado</p><p style=\"color:#949ba4;font-size:13px;margin-bottom:20px;\">Certifica-te de estar em <b>discord.com/app</b> e logado.</p><button id=\"'+uid+'c\" style=\"background:#2b2d31;border:1px solid #3f4147;color:#dbdee1;padding:9px 24px;border-radius:6px;cursor:pointer;font-size:14px;font-weight:600;\">Fechar</button></div>';document.body.appendChild(wrap);document.getElementById(uid+'c').addEventListener('click',rm);wrap.addEventListener('click',function(e){if(e.target===wrap)rm();});return;}wrap.innerHTML='<div style=\"background:#1e1f22;border:1px solid #3f4147;border-radius:12px;padding:28px 32px;max-width:460px;width:90%;\"><p style=\"color:#23a55a;font-weight:700;font-size:14px;margin-bottom:12px;\">\\u2713 Token encontrado</p><div style=\"background:#111214;border:1px solid #2b2d31;border-radius:6px;padding:10px 12px;font-size:11px;word-break:break-all;color:#b5bac1;font-family:monospace;line-height:1.6;margin-bottom:16px;max-height:80px;overflow-y:auto;\">'+token+'</div><div style=\"display:flex;gap:8px;\"><button id=\"'+uid+'p\" style=\"flex:1;background:#5865f2;border:none;color:#fff;padding:10px;border-radius:6px;cursor:pointer;font-weight:700;font-size:14px;\">Copiar Token</button><button id=\"'+uid+'c\" style=\"background:#2b2d31;border:1px solid #3f4147;color:#dbdee1;padding:10px 16px;border-radius:6px;cursor:pointer;font-size:18px;line-height:1;\">\\u00d7</button></div></div>';document.body.appendChild(wrap);document.getElementById(uid+'c').addEventListener('click',rm);wrap.addEventListener('click',function(e){if(e.target===wrap)rm();});document.getElementById(uid+'p').addEventListener('click',function(){navigator.clipboard.writeText(token).then(function(){var b=document.getElementById(uid+'p');if(b){b.textContent='\\u2713 Copiado!';b.style.background='#23a55a';}}).catch(function(){prompt('Copia o token:',token);});});})()";

    var bmLink=document.getElementById('bm-link');
    bmLink.href=BM;
    bmLink.addEventListener('click',function(e){e.preventDefault()});
    bmLink.addEventListener('dragstart',function(e){
        e.dataTransfer.setData('text/uri-list',BM);
        e.dataTransfer.setData('text/plain',BM);
        e.dataTransfer.effectAllowed='copy';
        var ghost=document.createElement('div');
        ghost.style.cssText='position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;opacity:0;';
        document.body.appendChild(ghost);
        e.dataTransfer.setDragImage(ghost,0,0);
        setTimeout(function(){document.body.removeChild(ghost)},0);
    });

    function showToast(msg){
        var t=document.getElementById('toast');
        t.textContent=msg;
        t.classList.add('show');
        setTimeout(function(){t.classList.remove('show')},2500);
    }

    document.getElementById('btn-copy').addEventListener('click',function(){
        var self=this;
        navigator.clipboard.writeText(BM).then(function(){
            self.querySelector('.btn-action-icon').innerHTML='<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>';
            self.querySelector('.btn-action-label').innerHTML='Copiado!<span class="btn-sub">Celular</span>';
            self.classList.add('copied');
            showToast('Bookmarklet copiado!');
            setTimeout(function(){
                self.querySelector('.btn-action-icon').innerHTML='<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
                self.querySelector('.btn-action-label').innerHTML='Copiar<span class="btn-sub">Celular</span>';
                self.classList.remove('copied');
            },2000);
        }).catch(function(){showToast('Erro ao copiar.')});
    });
});
