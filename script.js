// Year + copy button
(function(){
const yr = document.getElementById('year');
if (yr) yr.textContent = new Date().getFullYear();
const copy = document.getElementById('copy');
if (copy) copy.addEventListener('click', async () => {
try{
await navigator.clipboard.writeText(window.location.href);
const old = copy.textContent; copy.textContent = 'Copied!';
setTimeout(()=>copy.textContent = old, 1200);
}catch(e){ alert('Could not copy link'); }
});
})();
