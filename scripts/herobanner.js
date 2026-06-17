// Function to toggle the layout
        function toggleLayout() {
            document.getElementById('heroSection').classList.toggle('reverse');
        }

        // Function to change media type
        function changeMediaType() {
            const mediaType = document.getElementById('mediaTypeSelector').value;
            document.getElementById('videoContainer').style.display = (mediaType === 'video') ? 'block' : 'none';
            document.getElementById('imageContainer').style.display = (mediaType === 'image') ? 'block' : 'none';
            document.getElementById('singleImageContainer').style.display = (mediaType === 'single-image') ? 'block' : 'none';
            document.getElementById('gifContainer').style.display = (mediaType === 'gif') ? 'block' : 'none';
        }

        // Function to change media source
        function changeMedia() {
            const selector = document.getElementById('videoSelector').value;
            document.getElementById('youtubeVideo').style.display = (selector === 'youtube') ? 'block' : 'none';
            document.getElementById('localVideo').style.display = (selector === 'local') ? 'block' : 'none';
        }

        // Keyphrase detection for toggling .controls visibility
        let typedKeys = '';  // Store typed keys
        const keyphrase = 'debug';  // Keyphrase to toggle controls
        const controlsDiv = document.querySelector('.controls');

        document.addEventListener('keydown', (event) => {
            typedKeys += event.key.toLowerCase();

            // Check if typed keys match the keyphrase
            if (typedKeys.includes(keyphrase)) {
                // Toggle visibility of the controls div
                if (controlsDiv.style.display === 'none') {
                    controlsDiv.style.display = 'block';
                } else {
                    controlsDiv.style.display = 'none';
                }
                typedKeys = '';  // Reset typed keys after toggling
            }

            // Limit the typed keys to avoid overflow
            if (typedKeys.length > keyphrase.length) {
                typedKeys = typedKeys.slice(-keyphrase.length);
            }
        });