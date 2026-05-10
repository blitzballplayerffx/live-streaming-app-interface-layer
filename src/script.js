(function () {
    const gemPackages = [
        { amount: 50, price: "$0.99", display: "50" },
        { amount: 250, price: "$4.99", display: "250" },
        { amount: 600, price: "$9.99", display: "600" },
        { amount: 1300, price: "$19.99", display: "1,300" },
        { amount: 2800, price: "$39.99", display: "2,800" },
        { amount: 6000, price: "$79.99", display: "6,000" }
    ];

    // Expanded gifts with categories and tiered pricing
    const randomGifts = [
        // Food Category
        { id: "coffee", name: "☕ Coffee", emoji: "☕", cost: 1, category: "food" },
        { id: "cookie", name: "🍪 Cookie", emoji: "🍪", cost: 1, category: "food" },
        { id: "taco", name: "🌮 Taco", emoji: "🌮", cost: 5, category: "food" },
        { id: "pizza", name: "🍕 Pizza", emoji: "🍕", cost: 5, category: "food" },
        { id: "burger", name: "🍔 Burger", emoji: "🍔", cost: 5, category: "food" },
        { id: "sushi", name: "🍣 Sushi Platter", emoji: "🍣", cost: 10, category: "food" },
        { id: "icecream", name: "🍦 Ice Cream", emoji: "🍦", cost: 10, category: "food" },
        { id: "cake", name: "🎂 Cake", emoji: "🎂", cost: 50, category: "food" },
        { id: "lobster", name: "🦞 Lobster", emoji: "🦞", cost: 50, category: "food" },
        { id: "feast", name: "🍽️ Royal Feast", emoji: "🍽️", cost: 100, category: "food" },
        { id: "champagne", name: "🍾 Champagne", emoji: "🍾", cost: 100, category: "food" },
        
        // Fantasy Category
        { id: "star", name: "⭐ Star", emoji: "⭐", cost: 1, category: "fantasy" },
        { id: "crystal", name: "🔮 Crystal", emoji: "🔮", cost: 1, category: "fantasy" },
        { id: "magicwand", name: "🪄 Magic Wand", emoji: "🪄", cost: 5, category: "fantasy" },
        { id: "dragon", name: "🐉 Dragon", emoji: "🐉", cost: 5, category: "fantasy" },
        { id: "mermaid", name: "🧜 Mermaid", emoji: "🧜", cost: 10, category: "fantasy" },
        { id: "phoenix", name: "🦅 Phoenix", emoji: "🦅", cost: 10, category: "fantasy" },
        { id: "unicorn", name: "🦄 Unicorn", emoji: "🦄", cost: 50, category: "fantasy" },
        { id: "rainbow", name: "🌈 Rainbow", emoji: "🌈", cost: 50, category: "fantasy" },
        { id: "pegasus", name: "🪽 Pegasus", emoji: "🪽", cost: 100, category: "fantasy" },
        { id: "galaxy", name: "🌌 Galaxy", emoji: "🌌", cost: 100, category: "fantasy" },
        
        // Vehicles Category
        { id: "bike", name: "🚲 Bike", emoji: "🚲", cost: 1, category: "vehicles" },
        { id: "skateboard", name: "🛹 Skateboard", emoji: "🛹", cost: 1, category: "vehicles" },
        { id: "car", name: "🚗 Sports Car", emoji: "🚗", cost: 5, category: "vehicles" },
        { id: "motorcycle", name: "🏍️ Motorcycle", emoji: "🏍️", cost: 5, category: "vehicles" },
        { id: "helicopter", name: "🚁 Helicopter", emoji: "🚁", cost: 10, category: "vehicles" },
        { id: "sailboat", name: "⛵ Sailboat", emoji: "⛵", cost: 10, category: "vehicles" },
        { id: "rocket", name: "🚀 Rocket", emoji: "🚀", cost: 50, category: "vehicles" },
        { id: "spaceship", name: "🛸 Spaceship", emoji: "🛸", cost: 50, category: "vehicles" },
        { id: "yacht", name: "🛥️ Yacht", emoji: "🛥️", cost: 100, category: "vehicles" },
        { id: "jet", name: "✈️ Private Jet", emoji: "✈️", cost: 100, category: "vehicles" },
        
        // Love Category
        { id: "rose", name: "🌹 Rose", emoji: "🌹", cost: 1, category: "love" },
        { id: "loveletter", name: "💌 Love Letter", emoji: "💌", cost: 1, category: "love" },
        { id: "chocolate", name: "🍫 Chocolate", emoji: "🍫", cost: 5, category: "love" },
        { id: "teddy", name: "🧸 Teddy Bear", emoji: "🧸", cost: 5, category: "love" },
        { id: "flowers", name: "💐 Flowers", emoji: "💐", cost: 10, category: "love" },
        { id: "perfume", name: "🧴 Perfume", emoji: "🧴", cost: 10, category: "love" },
        { id: "ring", name: "💍 Diamond Ring", emoji: "💍", cost: 50, category: "love" },
        { id: "wedding", name: "💒 Wedding", emoji: "💒", cost: 50, category: "love" },
        { id: "heartgem", name: "💎 Heart Gem", emoji: "💎", cost: 100, category: "love" },
        { id: "tajmahal", name: "🕌 Taj Mahal", emoji: "🕌", cost: 100, category: "love" },
        
        // Luxury Category
        { id: "watch", name: "⌚ Watch", emoji: "⌚", cost: 1, category: "luxury" },
        { id: "purse", name: "👛 Purse", emoji: "👛", cost: 1, category: "luxury" },
        { id: "sunglasses", name: "🕶️ Shades", emoji: "🕶️", cost: 5, category: "luxury" },
        { id: "lipstick", name: "💄 Lipstick", emoji: "💄", cost: 5, category: "luxury" },
        { id: "crown", name: "👑 Crown", emoji: "👑", cost: 10, category: "luxury" },
        { id: "necklace", name: "📿 Necklace", emoji: "📿", cost: 10, category: "luxury" },
        { id: "diamond", name: "💠 Diamond", emoji: "💠", cost: 50, category: "luxury" },
        { id: "throne", name: "🪑 Throne", emoji: "🪑", cost: 50, category: "luxury" },
        { id: "castle", name: "🏰 Castle", emoji: "🏰", cost: 100, category: "luxury" },
        { id: "island", name: "🏝️ Island", emoji: "🏝️", cost: 100, category: "luxury" },
        
        // Fun Category
        { id: "balloon", name: "🎈 Balloon", emoji: "🎈", cost: 1, category: "fun" },
        { id: "confetti", name: "🎊 Confetti", emoji: "🎊", cost: 1, category: "fun" },
        { id: "gamepad", name: "🎮 Gamepad", emoji: "🎮", cost: 5, category: "fun" },
        { id: "headphones", name: "🎧 Headphones", emoji: "🎧", cost: 5, category: "fun" },
        { id: "dice", name: "🎲 Lucky Dice", emoji: "🎲", cost: 10, category: "fun" },
        { id: "fireworks", name: "🎆 Fireworks", emoji: "🎆", cost: 10, category: "fun" },
        { id: "slotmachine", name: "🎰 Jackpot", emoji: "🎰", cost: 50, category: "fun" },
        { id: "circus", name: "🎪 Circus", emoji: "🎪", cost: 50, category: "fun" },
        { id: "concert", name: "🎵 Concert", emoji: "🎵", cost: 100, category: "fun" },
        { id: "disco", name: "🪩 Disco Ball", emoji: "🪩", cost: 100, category: "fun" }
    ];

    // User data
    let userGems = 250;
    let userGifts = {};
    let totalGiftsSent = 0;
    let uniqueGiftTypesSent = new Set();
    let watchedStreamers = new Set();
    let pizzaBurgerCount = 0;
    let achievementsList = [];
    let selectedCountries = new Set();
    let activeSort = "all";
    let currentStreamer = null;
    let chatMessages = [];
    let currentModalStreamer = null;
    let activeGiftCategory = "all";
    let favoriteStreamers = new Set();

    // Friends & Messaging System
    let friendsList = [];
    let pendingFriendRequests = [];
    let conversations = {};
    let currentChatFriend = null;
    let contextMenuTarget = null;

    // Predefined streamers list
    const streamersData = [
        { username: "PixelPanda", streamTitle: "Chill vibes & gaming 🎮", emoji: "🐼", country: "USA" },
        { username: "NeonRacer", streamTitle: "Midnight racing league 🏎️", emoji: "🏎️", country: "Japan" },
        { username: "CosmicDJ", streamTitle: "Live electronic mix 🎧", emoji: "🎧", country: "Germany" },
        { username: "MysticArt", streamTitle: "Drawing your requests 🎨", emoji: "🎨", country: "France" },
        { username: "GamerGhost", streamTitle: "Horror game marathon 👻", emoji: "👻", country: "USA" },
        { username: "RetroWave", streamTitle: "Classic N64 playthrough 📼", emoji: "📼", country: "UK" },
        { username: "FoodieFly", streamTitle: "Cooking spicy ramen 🍜", emoji: "🍜", country: "Japan" },
        { username: "ZenTravel", streamTitle: "Mountain hiking live 🏔️", emoji: "🏔️", country: "Canada" },
        { username: "TechTitan", streamTitle: "Gadget reviews & unboxing 📱", emoji: "💻", country: "Germany" },
        { username: "BeatMaster", streamTitle: "DJ set & live mixing 🎵", emoji: "🎹", country: "Brazil" }
    ];

    const countriesList = ["USA", "UK", "Canada", "Australia", "Germany", "France", "Japan", "Brazil", "India", "South Korea", "Mexico", "Spain", "Italy", "Netherlands", "Sweden", "Norway", "China", "Russia"];

    const achievementsTemplate = [
        { id: "gift1", title: "🎁 First Gift", desc: "Send your first gift", emoji: "🎁", progress: 0, required: 1, achieved: false },
        { id: "gift10", title: "💎 Generous Soul", desc: "Send 10 gifts", emoji: "💝", progress: 0, required: 10, achieved: false },
        { id: "bigSpender", title: "💰 Gem Hoarder", desc: "1000 gems", emoji: "💎", progress: 0, required: 1000, achieved: false },
        { id: "varietyGifter", title: "🎨 Variety Fan", desc: "3 gift types", emoji: "🌈", progress: 0, required: 3, achieved: false },
        { id: "loyalViewer", title: "👀 Super Viewer", desc: "Watch 10 streamers", emoji: "👁️", progress: 0, required: 10, achieved: false },
        { id: "partyStarter", title: "🎉 Party Animal", desc: "Pizza & Burger", emoji: "🎉", progress: 0, required: 2, achieved: false },
        { id: "unicornFriend", title: "🦄 Mythical Patron", desc: "Unicorn gift", emoji: "🦄", progress: 0, required: 1, achieved: false }
    ];

    // Helper Functions
    function showPopup(msg, isError = false) {
        const popup = document.querySelector('.popup-notification');
        if (!popup) return;
        popup.textContent = msg;
        popup.style.backgroundColor = isError ? '#ff4757' : '#4caf50';
        popup.style.display = 'block';
        popup.offsetHeight;
        setTimeout(() => { popup.style.display = 'none'; }, 2000);
    }

    function saveGameData() {
        localStorage.setItem('userGems', userGems);
        localStorage.setItem('userGifts', JSON.stringify(userGifts));
        localStorage.setItem('totalGiftsSent', totalGiftsSent);
        localStorage.setItem('uniqueGiftTypesSent', JSON.stringify([...uniqueGiftTypesSent]));
        localStorage.setItem('watchedStreamers', JSON.stringify([...watchedStreamers]));
        localStorage.setItem('pizzaBurgerCount', pizzaBurgerCount);
        localStorage.setItem('achievementsList', JSON.stringify(achievementsList));
        localStorage.setItem('friendsList', JSON.stringify(friendsList));
        localStorage.setItem('pendingFriendRequests', JSON.stringify(pendingFriendRequests));
        localStorage.setItem('conversations', JSON.stringify(conversations));
        localStorage.setItem('favoriteStreamers', JSON.stringify([...favoriteStreamers]));
    }

    function loadGameData() {
        const sg = localStorage.getItem('userGems');
        const sgifts = localStorage.getItem('userGifts');
        const stotal = localStorage.getItem('totalGiftsSent');
        const sunique = localStorage.getItem('uniqueGiftTypesSent');
        const swatch = localStorage.getItem('watchedStreamers');
        const spb = localStorage.getItem('pizzaBurgerCount');
        const sach = localStorage.getItem('achievementsList');
        if (sg) userGems = parseInt(sg);
        if (sgifts) userGifts = JSON.parse(sgifts);
        if (stotal) totalGiftsSent = parseInt(stotal);
        if (sunique) uniqueGiftTypesSent = new Set(JSON.parse(sunique));
        if (swatch) watchedStreamers = new Set(JSON.parse(swatch));
        if (spb) pizzaBurgerCount = parseInt(spb);
        if (sach) achievementsList = JSON.parse(sach);
        else achievementsList = JSON.parse(JSON.stringify(achievementsTemplate));
        
        const savedFriends = localStorage.getItem('friendsList');
        if (savedFriends) friendsList = JSON.parse(savedFriends);
        else {
            friendsList = [{ username: "PixelPanda", emoji: "🐼" }];
        }
        const savedRequests = localStorage.getItem('pendingFriendRequests');
        if (savedRequests) pendingFriendRequests = JSON.parse(savedRequests);
        const savedConvos = localStorage.getItem('conversations');
        if (savedConvos) conversations = JSON.parse(savedConvos);
        
        const savedFavorites = localStorage.getItem('favoriteStreamers');
        if (savedFavorites) favoriteStreamers = new Set(JSON.parse(savedFavorites));
        
        randomGifts.forEach(g => { if (userGifts[g.id] === undefined) userGifts[g.id] = 0; });
        if (!localStorage.getItem('userGifts')) { userGifts["teddy"] = 1; userGifts["coffee"] = 2; }
        updateAchievementProgress(true);
    }

    function updateAchievementProgress(skipRender = false) {
        let idx = achievementsList.findIndex(a => a.id === "bigSpender");
        if (idx !== -1) {
            if (userGems >= 1000 && !achievementsList[idx].achieved) { achievementsList[idx].achieved = true; showPopup('🏆 Gem Hoarder!'); }
            achievementsList[idx].progress = userGems;
        }
        idx = achievementsList.findIndex(a => a.id === "gift1");
        if (idx !== -1) {
            if (totalGiftsSent >= 1 && !achievementsList[idx].achieved) { achievementsList[idx].achieved = true; showPopup('🏆 First Gift!'); }
            achievementsList[idx].progress = totalGiftsSent >= 1 ? 1 : 0;
        }
        idx = achievementsList.findIndex(a => a.id === "gift10");
        if (idx !== -1) {
            if (totalGiftsSent >= 10 && !achievementsList[idx].achieved) { achievementsList[idx].achieved = true; showPopup('🏆 Generous Soul!'); }
            achievementsList[idx].progress = Math.min(totalGiftsSent, 10);
        }
        idx = achievementsList.findIndex(a => a.id === "varietyGifter");
        if (idx !== -1) {
            achievementsList[idx].progress = uniqueGiftTypesSent.size;
            if (uniqueGiftTypesSent.size >= 3 && !achievementsList[idx].achieved) { achievementsList[idx].achieved = true; showPopup('🏆 Variety Fan!'); }
        }
        idx = achievementsList.findIndex(a => a.id === "loyalViewer");
        if (idx !== -1) {
            achievementsList[idx].progress = watchedStreamers.size;
            if (watchedStreamers.size >= 10 && !achievementsList[idx].achieved) { achievementsList[idx].achieved = true; showPopup('🏆 Super Viewer!'); }
        }
        idx = achievementsList.findIndex(a => a.id === "partyStarter");
        if (idx !== -1) {
            achievementsList[idx].progress = Math.min(pizzaBurgerCount, 2);
            if (pizzaBurgerCount >= 2 && !achievementsList[idx].achieved) { achievementsList[idx].achieved = true; showPopup('🏆 Party Animal!'); }
        }
        idx = achievementsList.findIndex(a => a.id === "unicornFriend");
        if (idx !== -1) {
            achievementsList[idx].progress = uniqueGiftTypesSent.has("unicorn") ? 1 : 0;
            if (uniqueGiftTypesSent.has("unicorn") && !achievementsList[idx].achieved) { achievementsList[idx].achieved = true; showPopup('🏆 Mythical Patron!'); }
        }
        saveGameData();
        if (!skipRender) { renderAchievementsScreen(); renderProfileScreen(); renderFriendsList(); renderFavoritesList(); }
    }

    function recordGiftSent(gid) {
        totalGiftsSent++;
        uniqueGiftTypesSent.add(gid);
        if (gid === "pizza" || gid === "burger") pizzaBurgerCount++;
        updateAchievementProgress();
    }
    
    function recordStreamerClick(name) { 
        if (!watchedStreamers.has(name)) { 
            watchedStreamers.add(name); 
            updateAchievementProgress(); 
        } 
    }

    // Favorite System
    function toggleFavorite(username) {
        if (favoriteStreamers.has(username)) {
            favoriteStreamers.delete(username);
            showPopup(`💔 Unfavorited ${username}`);
        } else {
            favoriteStreamers.add(username);
            showPopup(`⭐ Favorited ${username}!`);
        }
        saveGameData();
        updateFavoriteButton();
        filterStreamers();
        renderFavoritesList();
        renderProfileScreen();
    }

    function updateFavoriteButton() {
        const starBtn = document.getElementById('favoriteStarBtn');
        if (!starBtn || !currentStreamer) return;
        if (favoriteStreamers.has(currentStreamer.username)) {
            starBtn.textContent = '★';
            starBtn.classList.add('favorited');
        } else {
            starBtn.textContent = '☆';
            starBtn.classList.remove('favorited');
        }
    }

    // Friend & Messaging Core Functions
    function sendFriendRequest(toUsername, emoji) {
        if (friendsList.some(f => f.username === toUsername)) {
            showPopup(`💬 ${toUsername} is already your friend!`, false);
            return false;
        }
        if (pendingFriendRequests.some(req => req.from === toUsername)) {
            showPopup(`⏳ Request already sent to ${toUsername}`, false);
            return false;
        }
        pendingFriendRequests.push({ from: toUsername, emoji: emoji });
        saveGameData();
        showPopup(`✉️ Friend request sent to ${toUsername}!`, false);
        renderInbox();
        renderFriendsList();
        return true;
    }

    function acceptFriendRequest(fromUsername, emoji) {
        pendingFriendRequests = pendingFriendRequests.filter(req => req.from !== fromUsername);
        if (!friendsList.some(f => f.username === fromUsername)) {
            friendsList.push({ username: fromUsername, emoji: emoji });
            if (!conversations[fromUsername]) conversations[fromUsername] = [];
            conversations[fromUsername].push({ from: "system", text: `You are now friends with ${fromUsername}! Send a message.`, timestamp: Date.now() });
            saveGameData();
            showPopup(`✅ ${fromUsername} is now your friend!`, false);
            renderFriendsList();
            renderInbox();
            renderProfileScreen();
        }
    }

    function declineFriendRequest(fromUsername) {
        pendingFriendRequests = pendingFriendRequests.filter(req => req.from !== fromUsername);
        saveGameData();
        showPopup(`❌ Friend request from ${fromUsername} declined.`, false);
        renderInbox();
    }

    function removeFriend(username) {
        friendsList = friendsList.filter(f => f.username !== username);
        saveGameData();
        showPopup(`👋 ${username} removed from friends.`, false);
        renderFriendsList();
        renderProfileScreen();
        renderInbox();
        hideContextMenu();
    }

    function sendPrivateMessage(toUsername, text) {
        if (!text.trim()) return;
        if (!conversations[toUsername]) conversations[toUsername] = [];
        conversations[toUsername].push({ from: "me", text: text, timestamp: Date.now() });
        if (Math.random() > 0.6) {
            setTimeout(() => {
                if (conversations[toUsername]) {
                    const autoReplies = ["Cool! 😎", "Nice message!", "Thanks! 🙌", "Loving the stream?", "Gifts are awesome!"];
                    const reply = autoReplies[Math.floor(Math.random() * autoReplies.length)];
                    conversations[toUsername].push({ from: toUsername, text: reply, timestamp: Date.now() });
                    saveGameData();
                    if (currentChatFriend === toUsername) renderChatMessages(toUsername);
                    renderInbox();
                }
            }, 800);
        }
        saveGameData();
        if (currentChatFriend === toUsername) renderChatMessages(toUsername);
        renderInbox();
    }

    // Context Menu
    function showContextMenu(e, username) {
        e.preventDefault();
        e.stopPropagation();
        contextMenuTarget = username;
        const menu = document.getElementById('contextMenu');
        if (!menu) return;
        menu.classList.remove('hidden');
        menu.style.left = e.clientX + 'px';
        menu.style.top = e.clientY + 'px';
        
        const rect = menu.getBoundingClientRect();
        if (rect.right > window.innerWidth) menu.style.left = (window.innerWidth - rect.width - 10) + 'px';
        if (rect.bottom > window.innerHeight) menu.style.top = (window.innerHeight - rect.height - 10) + 'px';
    }

    function hideContextMenu() {
        const menu = document.getElementById('contextMenu');
        if (menu) menu.classList.add('hidden');
        contextMenuTarget = null;
    }

    // Rendering Friends List Screen
    function renderFriendsList() {
        const container = document.getElementById('friendsContainer');
        if (!container) return;
        if (friendsList.length === 0) {
            container.innerHTML = '<div class="empty-friends">✨ No friends yet. Send friend requests from streamer profiles! ✨</div>';
            return;
        }
        container.innerHTML = friendsList.map(f => `
            <div class="friend-card" data-friend="${f.username}">
                <div class="friend-info">
                    <div class="friend-avatar">${f.emoji || '👤'}</div>
                    <div>
                        <div class="friend-name">${f.username}</div>
                        <div class="friend-status">● Friend</div>
                    </div>
                </div>
                <div class="friend-actions">
                    <button class="chat-friend-btn" data-username="${f.username}">💬 Chat</button>
                </div>
            </div>
        `).join('');
        
        document.querySelectorAll('.friend-card').forEach(card => {
            const username = card.dataset.friend;
            card.addEventListener('contextmenu', (e) => showContextMenu(e, username));
            let pressTimer;
            card.addEventListener('touchstart', (e) => {
                pressTimer = setTimeout(() => showContextMenu(e, username), 600);
            });
            card.addEventListener('touchend', () => clearTimeout(pressTimer));
            card.addEventListener('touchmove', () => clearTimeout(pressTimer));
        });
        
        document.querySelectorAll('.chat-friend-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const username = btn.dataset.username;
                openChatWith(username);
            });
        });
    }

    // Rendering Favorites List Screen
    function renderFavoritesList() {
        const container = document.getElementById('favoritesListContainer');
        if (!container) return;
        if (favoriteStreamers.size === 0) {
            container.innerHTML = '<div class="empty-friends">⭐ No favorites yet. Favorite streamers from their profile!</div>';
            return;
        }
        const favArray = [...favoriteStreamers];
        container.innerHTML = favArray.map(username => {
            const streamer = streamersData.find(s => s.username === username);
            return `
                <div class="favorite-card">
                    <div class="friend-info">
                        <div class="friend-avatar">${streamer?.emoji || '🎭'}</div>
                        <div>
                            <div class="friend-name">${username}</div>
                            <div class="friend-status">⭐ Favorited</div>
                        </div>
                    </div>
                    <button class="chat-friend-btn unfav-btn" data-username="${username}">💔</button>
                </div>
            `;
        }).join('');
        
        document.querySelectorAll('.unfav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const username = btn.dataset.username;
                toggleFavorite(username);
            });
        });
    }

    // Inbox Screen
    function renderInbox() {
        const container = document.getElementById('inboxConversations');
        if (!container) return;
        let html = '';
        
        if (pendingFriendRequests.length > 0) {
            html += '<div class="bag-section-title">📨 Friend Requests</div>';
            pendingFriendRequests.forEach(req => {
                html += `<div class="conversation-card request-card" data-from="${req.from}">
                            <div class="friend-info">
                                <div class="friend-avatar">${req.emoji || '👤'}</div>
                                <div><div class="friend-name">${req.from}</div><div class="friend-status">wants to be friends</div></div>
                            </div>
                            <div style="display: flex; gap: 8px;">
                                <button class="accept-req-btn" data-from="${req.from}" data-emoji="${req.emoji}" style="background:#4caf50; border:none; padding:6px 12px; border-radius:20px; color:white; cursor:pointer;">Accept</button>
                                <button class="decline-req-btn" data-from="${req.from}" style="background:#ff4757; border:none; padding:6px 12px; border-radius:20px; color:white; cursor:pointer;">Decline</button>
                            </div>
                        </div>`;
            });
        }
        
        const allFriends = friendsList.map(f => f.username);
        if (allFriends.length > 0) {
            html += '<div class="bag-section-title">💬 Messages</div>';
            allFriends.forEach(username => {
                const friend = friendsList.find(f => f.username === username);
                const lastMsg = conversations[username] && conversations[username].length ? conversations[username][conversations[username].length-1].text : "Start a conversation!";
                html += `<div class="conversation-card" data-chat="${username}">
                            <div class="conv-info">
                                <div class="conv-avatar">${friend?.emoji || '👤'}</div>
                                <div><div class="conv-name">${username}</div><div class="friend-status" style="font-size:11px; color:#aaa;">${lastMsg.substring(0, 30)}</div></div>
                            </div>
                        </div>`;
            });
        }
        
        if (html === '') html = '<div class="empty-friends">📭 No messages or requests. Add friends from streamer profiles!</div>';
        container.innerHTML = html;
        
        document.querySelectorAll('.accept-req-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const from = btn.dataset.from;
                const emoji = btn.dataset.emoji;
                acceptFriendRequest(from, emoji);
            });
        });
        
        document.querySelectorAll('.decline-req-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const from = btn.dataset.from;
                declineFriendRequest(from);
            });
        });
        
        document.querySelectorAll('.conversation-card[data-chat]').forEach(card => {
            card.addEventListener('click', () => {
                const username = card.dataset.chat;
                openChatWith(username);
            });
        });
    }

    function openChatWith(username) {
        currentChatFriend = username;
        const chatView = document.getElementById('inboxChatView');
        const conversationsDiv = document.getElementById('inboxConversations');
        if (chatView && conversationsDiv) {
            conversationsDiv.classList.add('hidden');
            chatView.classList.remove('hidden');
            document.getElementById('chatFriendName').innerText = username;
            renderChatMessages(username);
        }
    }

    function renderChatMessages(username) {
        const container = document.getElementById('chatMessagesList');
        if (!container) return;
        const msgs = conversations[username] || [];
        container.innerHTML = msgs.map(m => `
            <div class="chat-bubble ${m.from === 'me' ? 'sent' : 'received'}">
                ${m.from === 'me' ? 'You' : (m.from === 'system' ? 'System' : username)}: ${m.text}
            </div>
        `).join('');
        container.scrollTop = container.scrollHeight;
    }

    function closeChatView() {
        const chatView = document.getElementById('inboxChatView');
        const conversationsDiv = document.getElementById('inboxConversations');
        if (chatView && conversationsDiv) {
            chatView.classList.add('hidden');
            conversationsDiv.classList.remove('hidden');
            currentChatFriend = null;
        }
    }

    // Show Other User Profile
    function showOtherUserProfile(user) {
        const screen = document.getElementById('otherUserProfileScreen');
        const profileContent = document.getElementById('otherProfileContent');
        const titleSpan = document.getElementById('otherProfileUsername');
        const actionBtn = document.getElementById('friendRequestActionBtn');
        if (!screen || !profileContent || !titleSpan || !actionBtn) return;
        
        titleSpan.innerText = user.username;
        const isFriend = friendsList.some(f => f.username === user.username);
        const isRequestSent = pendingFriendRequests.some(req => req.from === user.username);
        
        actionBtn.onclick = null;
        
        if (isFriend) {
            actionBtn.innerText = '✓ Friend';
            actionBtn.disabled = true;
            actionBtn.style.background = '#555';
        } else if (isRequestSent) {
            actionBtn.innerText = '⏳ Pending';
            actionBtn.disabled = true;
            actionBtn.style.background = '#ffa500';
        } else {
            actionBtn.innerText = '➕ Add Friend';
            actionBtn.disabled = false;
            actionBtn.style.background = '#4caf50';
            actionBtn.onclick = () => sendFriendRequest(user.username, user.emoji);
        }
        
        const isFavorited = favoriteStreamers.has(user.username);
        
        profileContent.innerHTML = `
            <div class="other-profile-card">
                <div class="other-profile-avatar">${user.emoji || '🎭'}</div>
                <div class="profile-name">${user.username} ${isFavorited ? '⭐' : ''}</div>
                <div class="profile-join-date">⭐ Live Streamer</div>
                <div class="other-profile-stats">
                    <div class="stat-item"><div class="stat-value">${Math.floor(Math.random() * 5000)}</div><div class="stat-label">Followers</div></div>
                    <div class="stat-item"><div class="stat-value">${Math.floor(Math.random() * 200)}</div><div class="stat-label">Gifts Received</div></div>
                </div>
                <div class="profile-bio">✨ Loves interacting with fans! Send gifts and say hi! ✨</div>
            </div>
        `;
        hideAllScreens();
        const bottomNav = document.getElementById('bottomNav');
        if (bottomNav) bottomNav.classList.add('hidden-nav');
        screen.classList.remove('hidden');
    }

    // Standard screen renderers
    function renderAchievementsScreen() {
        const grid = document.getElementById('achievementsGrid');
        if (!grid) return;
        grid.innerHTML = achievementsList.map(a => `<div class="achievement-card"><div class="achievement-emoji">${a.emoji}</div><div class="achievement-info"><div class="achievement-title">${a.title}</div><div class="achievement-desc">${a.desc}</div></div><div class="achievement-progress">${a.progress} / ${a.required}</div>${a.achieved ? '<div class="achievement-checkmark">✓</div>' : ''}</div>`).join('');
    }

    function renderProfileScreen() {
        const container = document.getElementById('profileContent');
        if (!container) return;
        const totalItems = Object.values(userGifts).reduce((a, b) => a + b, 0);
        const earnedAchievements = achievementsList.filter(a => a.achieved === true);
        const shelfHtml = earnedAchievements.length === 0 ? '<div style="color:#666; text-align:center; padding:8px;">✨ No achievements yet ✨</div>' : 
            `<div class="achievement-emojis-container">${earnedAchievements.map(a => `<div class="achievement-tile" data-achievement-title="${a.title}" data-achievement-desc="${a.desc}">${a.emoji}</div>`).join('')}</div>`;
        
        const friendCount = friendsList.length;
        const favCount = favoriteStreamers.size;
        
        container.innerHTML = `<div class="profile-card"><div class="profile-avatar">🎭</div><div class="profile-name">StreamFan_92</div><div class="profile-join-date">Joined: March 2025</div><div class="profile-stats"><div class="stat-item"><div class="stat-value">${userGems}</div><div class="stat-label">Gems</div></div><div class="stat-item"><div class="stat-value">${totalGiftsSent}</div><div class="stat-label">Gifts Sent</div></div><div class="stat-item"><div class="stat-value">${totalItems}</div><div class="stat-label">Items Owned</div></div><div class="stat-item"><div class="stat-value">${friendCount}</div><div class="stat-label">Friends</div></div><div class="stat-item"><div class="stat-value">${favCount}</div><div class="stat-label">Favorites</div></div></div><div class="profile-bio">✨ Live stream enthusiast | Loves sending gifts 🎁 | eGlobe supporter ✨</div></div><div class="achievements-shelf"><div class="shelf-title">🏆 ACHIEVEMENTS COLLECTION 🏆</div>${shelfHtml}</div>`;
        
        document.querySelectorAll('.achievement-tile').forEach(tile => {
            tile.addEventListener('click', (e) => {
                e.stopPropagation();
                const title = tile.getAttribute('data-achievement-title');
                const desc = tile.getAttribute('data-achievement-desc');
                showPopup(`${title} — ${desc}`, false);
            });
        });
    }

    function renderBagInventory() {
        const container = document.getElementById('bagItemsContainer');
        if (!container) return;
        const ownedGifts = randomGifts.filter(g => userGifts[g.id] > 0);
        if (userGems === 0 && ownedGifts.length === 0) { container.innerHTML = '<div class="empty-message">✨ Bag empty. Buy some gems or gifts!</div>'; return; }
        let html = '';
        if (userGems > 0) html += `<div class="gem-item"><div class="gem-info"><span class="gem-emoji">💎</span><div class="gem-details"><span class="gem-name">Gems</span></div></div><div class="gem-quantity">x${userGems}</div></div>`;
        html += ownedGifts.map(g => `<div class="inventory-item"><div class="item-info"><span class="item-emoji">${g.emoji}</span><div><div class="item-name">${g.name}</div></div></div><div class="item-quantity">x${userGifts[g.id]}</div></div>`).join('');
        container.innerHTML = html;
    }

    function renderGiftShop(filterCategory = "all") {
        const grid = document.getElementById('giftShopGrid');
        if (!grid) return;
        
        activeGiftCategory = filterCategory;
        
        document.querySelectorAll('.cat-btn').forEach(btn => {
            if (btn.dataset.cat === filterCategory) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        let giftsToShow = filterCategory === "all" 
            ? randomGifts 
            : randomGifts.filter(g => g.category === filterCategory);
        
        grid.innerHTML = giftsToShow.map(g => `
            <div class="gift-card" data-gift-id="${g.id}">
                <div class="gift-emoji">${g.emoji}</div>
                <div class="gift-name">${g.name}</div>
                <div class="gift-cost">💎 ${g.cost}</div>
            </div>
        `).join('');
        
        document.querySelectorAll('.gift-card').forEach(card => { 
            card.addEventListener('click', () => { 
                const gift = randomGifts.find(g => g.id === card.dataset.giftId); 
                if (gift) buyGift(gift); 
            }); 
        });
        renderGiftShopCounter();
    }
    
    function renderGiftShopCounter() { 
        randomGifts.forEach(gift => { 
            const card = document.querySelector(`.gift-card[data-gift-id="${gift.id}"]`); 
            if (card && userGifts[gift.id] > 0) { 
                let badge = card.querySelector('.owned-badge'); 
                if (!badge) { 
                    badge = document.createElement('div'); 
                    badge.className = 'owned-badge'; 
                    card.appendChild(badge); 
                } 
                badge.textContent = userGifts[gift.id]; 
            } else if (card) { 
                const old = card.querySelector('.owned-badge'); 
                if (old) old.remove(); 
            } 
        }); 
    }
    
    function renderExchangeShop() {
        const container = document.getElementById('gemsShopContainer');
        if (!container) return;
        container.innerHTML = gemPackages.map(p => `<div class="buy-gem-card" data-gem-amount="${p.amount}"><span class="buy-gem-emoji">💎</span><div class="buy-gem-amount">${p.display}</div><div class="buy-gem-price">${p.price}</div></div>`).join('');
        document.querySelectorAll('.buy-gem-card').forEach(card => { card.addEventListener('click', () => buyGems(parseInt(card.dataset.gemAmount))); });
    }
    
    function renderStreamers(arr) { 
        const grid = document.getElementById('streamerGrid'); 
        if (!grid) return; 
        grid.innerHTML = ''; 
        let streamersToRender = arr || streamersData;
        
        // Apply sort
        if (activeSort === "favorites") {
            streamersToRender = [...streamersToRender].filter(s => favoriteStreamers.has(s.username));
        }
        
        // Sort: favorited streamers first
        streamersToRender = [...streamersToRender].sort((a, b) => {
            const aFav = favoriteStreamers.has(a.username);
            const bFav = favoriteStreamers.has(b.username);
            if (aFav && !bFav) return -1;
            if (!aFav && bFav) return 1;
            return 0;
        });
        
        streamersToRender.forEach(s => { 
            const card = document.createElement('div'); 
            card.className = 'streamer-card';
            const isFav = favoriteStreamers.has(s.username);
            card.innerHTML = `<div class="square-placeholder">
                <div class="username-top-left">${s.username}</div>
                ${isFav ? '<div class="favorite-star-indicator">⭐</div>' : ''}
                <div class="live-dot-green"></div>
                <div class="avatar-icon">${s.emoji}</div>
                <div class="live-title-bottom"><div class="live-title-text">${s.streamTitle}</div></div>
            </div>`; 
            card.addEventListener('click', (e) => {
                e.stopPropagation();
                showStreamerScreen(s);
            }); 
            grid.appendChild(card); 
        }); 
    }
    
    function renderCountryCheckboxes() {
        const grid = document.getElementById('countriesGrid');
        if (!grid) return;
        grid.innerHTML = countriesList.map(c => `<div class="country-checkbox-item"><input type="checkbox" id="c-${c}" ${selectedCountries.has(c) ? 'checked' : ''}><label for="c-${c}">${c}</label></div>`).join('');
        grid.querySelectorAll('input').forEach(cb => { cb.addEventListener('change', (e) => { const country = cb.id.slice(2); if (e.target.checked) selectedCountries.add(country); else selectedCountries.delete(country); filterStreamers(); }); });
    }
    
    function filterStreamers() { 
        let filtered = selectedCountries.size > 0 ? streamersData.filter(s => selectedCountries.has(s.country)) : [...streamersData];
        
        // Apply sort
        if (activeSort === "favorites") {
            filtered = filtered.filter(s => favoriteStreamers.has(s.username));
        }
        
        // Sort favorited first
        filtered.sort((a, b) => {
            const aFav = favoriteStreamers.has(a.username);
            const bFav = favoriteStreamers.has(b.username);
            if (aFav && !bFav) return -1;
            if (!aFav && bFav) return 1;
            return 0;
        });
        renderStreamers(filtered); 
    }
    
    function updateSortDropdown(sortType) {
        activeSort = sortType;
        const sortBtn = document.getElementById('sortDropdownBtn');
        if (sortBtn) {
            const labels = { all: "📋 All", new: "🆕 New", favorites: "⭐ Favorites" };
            sortBtn.innerHTML = `<span>${labels[sortType].split(' ')[0]}</span> ${labels[sortType].split(' ')[1]} <span class="arrow">▼</span>`;
        }
        document.querySelectorAll('#sortDropdownMenu .dropdown-item').forEach(item => {
            if (item.dataset.sort === sortType) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        document.getElementById('sortDropdownMenu')?.classList.add('hidden');
        filterStreamers();
    }
    
    function buyGems(amount) { 
        userGems += amount; 
        updateAllGemUI(); 
        showPopup(`✨ +${amount} gems!`); 
    }
    
    function buyGift(gift) { 
        if (userGems >= gift.cost) { 
            userGems -= gift.cost; 
            userGifts[gift.id]++; 
            updateAllGemUI(); 
            showPopup(`🎁 +1 ${gift.name} added to your bag!`); 
        } else showPopup(`❌ Need ${gift.cost} gems!`, true); 
    }
    
    function sendGiftToStreamer(streamer, gift) { 
        if (userGifts[gift.id] > 0) { 
            userGifts[gift.id]--; 
            updateAllGemUI(); 
            recordGiftSent(gift.id); 
            showPopup(`🎁 Sent ${gift.emoji} to ${streamer.username}!`); 
            closeModal(); 
            if (currentStreamer && currentStreamer.username === streamer.username) addChatMessage("💝 System", `${gift.emoji} ${gift.name} sent! Thank you!`); 
        } else showPopup(`❌ No ${gift.name} left.`, true); 
    }
    
    function updateAllGemUI() {
        const totalAmountEl = document.getElementById('totalAmount');
        const currentGemsEl = document.getElementById('currentGems');
        const exchangeGemCountEl = document.getElementById('exchangeGemCount');
        if (totalAmountEl) totalAmountEl.textContent = userGems;
        if (currentGemsEl) currentGemsEl.textContent = userGems;
        if (exchangeGemCountEl) exchangeGemCountEl.textContent = userGems;
        const badge = document.getElementById('bagCountBadge');
        const totalItems = Object.values(userGifts).reduce((a,b)=>a+b,0);
        if (badge) { 
            badge.textContent = totalItems; 
            badge.style.display = totalItems > 0 ? 'flex' : 'none'; 
        }
        renderBagInventory(); 
        renderGiftShopCounter(); 
        updateAchievementProgress(); 
        saveGameData();
    }
    
    function openGiftModal(streamer) {
        currentModalStreamer = streamer;
        const owned = randomGifts.filter(g => userGifts[g.id] > 0);
        const listDiv = document.getElementById('modalGiftList');
        const modalTitle = document.getElementById('modalStreamerName');
        if (modalTitle) modalTitle.textContent = `Send Gift to ${streamer.username}`;
        if (owned.length === 0) {
            if (listDiv) listDiv.innerHTML = `<div class="modal-empty-message">🎁 You don't own any gifts!<br>Visit the Gift Shop to buy some 🎁</div>`;
        } else {
            if (listDiv) {
                listDiv.innerHTML = owned.map(g => `<div class="modal-gift-option"><span class="modal-gift-emoji">${g.emoji}</span><div class="modal-gift-info"><div class="modal-gift-name">${g.name}</div><div class="modal-gift-quantity">Owned: x${userGifts[g.id]}</div></div><button class="modal-gift-send-btn" data-gift-id="${g.id}">Send 🎁</button></div>`).join('');
                listDiv.querySelectorAll('.modal-gift-send-btn').forEach(btn => { 
                    btn.addEventListener('click', (e) => { 
                        e.stopPropagation(); 
                        const gift = randomGifts.find(g => g.id === btn.dataset.giftId); 
                        if (gift && currentModalStreamer) sendGiftToStreamer(currentModalStreamer, gift); 
                    }); 
                });
            }
        }
        const modal = document.getElementById('giftModal');
        if (modal) {
            modal.classList.remove('hidden');
            document.body.classList.add('modal-open');
        }
    }
    
    function closeModal() { 
        const modal = document.getElementById('giftModal');
        if (modal) {
            modal.classList.add('hidden');
            document.body.classList.remove('modal-open');
        }
        currentModalStreamer = null; 
    }
    
    function addChatMessage(user, text) { 
        chatMessages.push({ user, text }); 
        if (chatMessages.length > 50) chatMessages.shift(); 
        renderChat(); 
    }
    
    function renderChat() { 
        const container = document.getElementById('chatMessages'); 
        if (!container) return; 
        container.innerHTML = chatMessages.map(m => `<div class="chat-message"><span class="chat-user">${m.user}:</span> ${m.text}</div>`).join(''); 
        container.scrollTop = container.scrollHeight; 
    }
    
    function setupChatHandlers() {
        const sendBtn = document.getElementById('chatSendBtn');
        const input = document.getElementById('chatInput');
        const giftBtn = document.getElementById('chatGiftBtn');
        
        const send = () => { 
            const txt = input ? input.value.trim() : ''; 
            if (txt && currentStreamer) { 
                addChatMessage("You", txt); 
                if (input) input.value = ''; 
                if (Math.random() > 0.7) setTimeout(() => addChatMessage(currentStreamer.username, "Thanks for watching! 🙏"), 1000); 
            } 
        };
        
        if (sendBtn) sendBtn.onclick = send;
        if (input) input.onkeypress = (e) => { if (e.key === 'Enter') send(); };
        if (giftBtn) giftBtn.onclick = () => { if (currentStreamer) openGiftModal(currentStreamer); else showPopup("No streamer selected", true); };
    }
    
    function showStreamerScreen(streamer) {
        if (!streamer) {
            console.error("No streamer provided");
            return;
        }
        currentStreamer = streamer;
        recordStreamerClick(streamer.username);
        
        const nameTagBtn = document.getElementById('streamerNameTagBtn');
        const avatarLarge = document.getElementById('streamerAvatarLarge');
        
        if (nameTagBtn) nameTagBtn.textContent = streamer.username;
        if (avatarLarge) avatarLarge.textContent = streamer.emoji;
        
        updateFavoriteButton();
        
        chatMessages = [{ user: "System", text: "Welcome to the stream! 🎉" }, { user: streamer.username, text: "Hey everyone! Thanks for joining! 🎮" }];
        renderChat();
        setupChatHandlers();
        
        hideAllScreens();
        const bottomNav = document.getElementById('bottomNav');
        if (bottomNav) bottomNav.classList.add('hidden-nav');
        
        const streamerScreen = document.getElementById('streamerScreen');
        if (streamerScreen) streamerScreen.classList.remove('hidden');
    }
    
    function hideAllScreens() { 
        ['homeScreen','bagScreen','exchangeScreen','giftShopScreen','achievementsScreen','profileScreen','streamerScreen','friendsScreen','favoritesListScreen','inboxScreen','otherUserProfileScreen'].forEach(id => { 
            const el = document.getElementById(id); 
            if (el) el.classList.add('hidden'); 
        }); 
    }
    
    function showHome() { 
        hideAllScreens(); 
        const bottomNav = document.getElementById('bottomNav');
        if (bottomNav) bottomNav.classList.remove('hidden-nav'); 
        const homeScreen = document.getElementById('homeScreen');
        if (homeScreen) homeScreen.classList.remove('hidden'); 
        updateActiveNav('homeNavBtn'); 
        filterStreamers(); 
    }
    
    function showBag() { 
        hideAllScreens(); 
        const bottomNav = document.getElementById('bottomNav');
        if (bottomNav) bottomNav.classList.remove('hidden-nav'); 
        const bagScreen = document.getElementById('bagScreen');
        if (bagScreen) bagScreen.classList.remove('hidden'); 
        updateActiveNav('bagNavBtn'); 
        renderBagInventory(); 
    }
    
    function showExchange() { 
        hideAllScreens(); 
        const bottomNav = document.getElementById('bottomNav');
        if (bottomNav) bottomNav.classList.remove('hidden-nav'); 
        const exchangeScreen = document.getElementById('exchangeScreen');
        if (exchangeScreen) exchangeScreen.classList.remove('hidden'); 
        updateActiveNav('exchangeNavBtn'); 
        updateAllGemUI(); 
    }
    
    function showGifts() { 
        hideAllScreens(); 
        const bottomNav = document.getElementById('bottomNav');
        if (bottomNav) bottomNav.classList.remove('hidden-nav'); 
        const giftShopScreen = document.getElementById('giftShopScreen');
        if (giftShopScreen) giftShopScreen.classList.remove('hidden'); 
        updateActiveNav('giftShopNavBtn'); 
        updateAllGemUI(); 
        renderGiftShop(activeGiftCategory); 
    }
    
    function showAchievements() { 
        hideAllScreens(); 
        const bottomNav = document.getElementById('bottomNav');
        if (bottomNav) bottomNav.classList.remove('hidden-nav'); 
        const achievementsScreen = document.getElementById('achievementsScreen');
        if (achievementsScreen) achievementsScreen.classList.remove('hidden'); 
        updateActiveNav('achievementsNavBtn'); 
        renderAchievementsScreen(); 
    }
    
    function showProfile() { 
        hideAllScreens(); 
        const bottomNav = document.getElementById('bottomNav');
        if (bottomNav) bottomNav.classList.remove('hidden-nav'); 
        const profileScreen = document.getElementById('profileScreen');
        if (profileScreen) profileScreen.classList.remove('hidden'); 
        renderProfileScreen(); 
    }
    
    function showFriendsList() { 
        hideAllScreens(); 
        const bottomNav = document.getElementById('bottomNav');
        if (bottomNav) bottomNav.classList.remove('hidden-nav'); 
        const friendsScreen = document.getElementById('friendsScreen');
        if (friendsScreen) friendsScreen.classList.remove('hidden'); 
        renderFriendsList(); 
    }
    
    function showFavoritesList() { 
        hideAllScreens(); 
        const bottomNav = document.getElementById('bottomNav');
        if (bottomNav) bottomNav.classList.remove('hidden-nav'); 
        const favoritesListScreen = document.getElementById('favoritesListScreen');
        if (favoritesListScreen) favoritesListScreen.classList.remove('hidden'); 
        renderFavoritesList(); 
    }
    
    function showInbox() { 
        hideAllScreens(); 
        const bottomNav = document.getElementById('bottomNav');
        if (bottomNav) bottomNav.classList.remove('hidden-nav'); 
        const inboxScreen = document.getElementById('inboxScreen');
        if (inboxScreen) inboxScreen.classList.remove('hidden'); 
        renderInbox(); 
    }
    
    function updateActiveNav(activeId) { 
        ['homeNavBtn','bagNavBtn','exchangeNavBtn','giftShopNavBtn','achievementsNavBtn'].forEach(id => { 
            const el = document.getElementById(id); 
            if (el) { 
                if (id === activeId) el.classList.add('active'); 
                else el.classList.remove('active'); 
            } 
        }); 
    }
    
    function updateTime() { 
        const t = document.querySelector('.status-bar .time'); 
        if (t) { 
            const d = new Date(); 
            let h = d.getHours(); 
            const m = d.getMinutes().toString().padStart(2,'0'); 
            const ampm = h >= 12 ? 'PM' : 'AM'; 
            h = h % 12 || 12; 
            t.textContent = `${h}:${m} ${ampm}`; 
        } 
    }
    
    function setupCategoryFilter() {
        const categoryBtns = document.querySelectorAll('.cat-btn');
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.dataset.cat;
                renderGiftShop(category);
            });
        });
    }
    
    function setupEventListeners() {
        // Bottom navigation
        document.getElementById('homeNavBtn')?.addEventListener('click', showHome);
        document.getElementById('bagNavBtn')?.addEventListener('click', showBag);
        document.getElementById('exchangeNavBtn')?.addEventListener('click', showExchange);
        document.getElementById('giftShopNavBtn')?.addEventListener('click', showGifts);
        document.getElementById('achievementsNavBtn')?.addEventListener('click', showAchievements);
        
        // Header buttons
        document.getElementById('profileHeaderBtn')?.addEventListener('click', showProfile);
        document.getElementById('inboxHeaderBtn')?.addEventListener('click', showInbox);
        document.getElementById('friendsListBtn')?.addEventListener('click', showFriendsList);
        document.getElementById('favoritesListBtn')?.addEventListener('click', showFavoritesList);
        
        // Back buttons
        document.getElementById('backBtn')?.addEventListener('click', showHome);
        document.querySelector('.exchange-back-btn')?.addEventListener('click', showHome);
        document.querySelector('.gift-shop-back-btn')?.addEventListener('click', showHome);
        document.querySelector('.achievements-back-btn')?.addEventListener('click', showHome);
        document.querySelector('.profile-back-btn')?.addEventListener('click', showHome);
        document.querySelector('.friends-back-btn')?.addEventListener('click', showProfile);
        document.querySelector('.favorites-list-back-btn')?.addEventListener('click', showProfile);
        document.getElementById('inboxBackBtn')?.addEventListener('click', showHome);
        
        // Streamer back
        document.getElementById('streamerBackBtn')?.addEventListener('click', showHome);
        
        // Bag icon
        document.getElementById('bagIconBtn')?.addEventListener('click', showBag);
        
        // Streamer name tag - click to view profile
        document.getElementById('streamerNameTagBtn')?.addEventListener('click', () => { 
            if (currentStreamer) showOtherUserProfile(currentStreamer); 
        });
        
        // Favorite star button
        document.getElementById('favoriteStarBtn')?.addEventListener('click', () => {
            if (currentStreamer) toggleFavorite(currentStreamer.username);
        });
        
        // Sort dropdown
        document.getElementById('sortDropdownBtn')?.addEventListener('click', (e) => {
            e.stopPropagation();
            document.getElementById('countriesGrid')?.classList.add('hidden');
            document.getElementById('sortDropdownMenu')?.classList.toggle('hidden');
        });
        
        document.querySelectorAll('#sortDropdownMenu .dropdown-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                updateSortDropdown(item.dataset.sort);
            });
        });
        
        // Filter dropdown
        document.getElementById('filterDropdownBtn')?.addEventListener('click', (e) => {
            e.stopPropagation();
            document.getElementById('sortDropdownMenu')?.classList.add('hidden');
            document.getElementById('countriesGrid')?.classList.toggle('hidden');
        });
        
        // Close dropdowns when clicking outside
        document.addEventListener('click', () => {
            document.getElementById('sortDropdownMenu')?.classList.add('hidden');
            document.getElementById('countriesGrid')?.classList.add('hidden');
        });
        
        // Modal
        document.getElementById('modalCloseBtn')?.addEventListener('click', closeModal);
        document.getElementById('modalExchangeBtn')?.addEventListener('click', () => { closeModal(); showExchange(); });
        document.getElementById('modalGiftShopBtn')?.addEventListener('click', () => { closeModal(); showGifts(); });
        
        // Modal backdrop click
        document.getElementById('giftModal')?.addEventListener('click', (e) => { 
            if (e.target === document.getElementById('giftModal')) closeModal(); 
        });
        
        // Inbox chat
        document.querySelector('.chat-back-btn')?.addEventListener('click', closeChatView);
        
        document.getElementById('chatSendMsgBtn')?.addEventListener('click', () => { 
            if (currentChatFriend) { 
                const input = document.getElementById('privateChatInput'); 
                if (input) {
                    sendPrivateMessage(currentChatFriend, input.value); 
                    input.value = ''; 
                }
            } 
        });
        
        document.getElementById('privateChatInput')?.addEventListener('keypress', (e) => { 
            if (e.key === 'Enter' && currentChatFriend) { 
                sendPrivateMessage(currentChatFriend, e.target.value); 
                e.target.value = ''; 
            } 
        });
        
        // Other profile back
        document.querySelector('.other-profile-back-btn')?.addEventListener('click', () => { 
            if (currentStreamer) showStreamerScreen(currentStreamer); 
            else showHome(); 
        });
        
        // Context menu
        document.querySelector('.remove-friend-context-btn')?.addEventListener('click', () => {
            if (contextMenuTarget) removeFriend(contextMenuTarget);
        });
        document.querySelector('.cancel-context-btn')?.addEventListener('click', hideContextMenu);
        
        // Hide context menu on outside click
        document.addEventListener('click', (e) => {
            if (!e.target.closest('#contextMenu') && !e.target.closest('.friend-card')) {
                hideContextMenu();
            }
        });
        
        // Category filter for gift shop
        setupCategoryFilter();
    }
    
    function init() { 
        loadGameData(); 
        renderCountryCheckboxes(); 
        renderExchangeShop(); 
        renderGiftShop('all'); 
        renderStreamers(streamersData); 
        updateAllGemUI(); 
        setupEventListeners(); 
        updateTime(); 
        setInterval(updateTime, 60000); 
        showHome(); 
    }
    
    init();
})();