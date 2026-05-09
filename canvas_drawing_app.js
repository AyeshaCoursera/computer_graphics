   <script>
        const canvas = document.getElementById('drawCanvas');
        const ctx = canvas.getContext('2d');
        const colorPicker = document.getElementById('colorPicker');
        const clearBtn = document.getElementById('clearBtn');

        let drawing = false;

        // Set initial brush styles
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#000000';

        // Mouse Events
        canvas.addEventListener('mousedown', (e) => {
            drawing = true;
            draw(e); // Start drawing immediately on click
        });

        canvas.addEventListener('mousemove', draw);

        canvas.addEventListener('mouseup', () => {
            drawing = false;
            ctx.beginPath(); // Reset path so lines don't connect weirdly
        });

        function draw(e) {
            if (!drawing) return;

            // Get correct mouse coordinates relative to canvas
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            ctx.strokeStyle = colorPicker.value;
            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x, y);
        }

        clearBtn.addEventListener('click', () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        });
    </script>
