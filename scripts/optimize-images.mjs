import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function optimizeImagesInDir(publicDir, dirName) {
	console.log(`Optimizing images in ${dirName}...`);

	if (!fs.existsSync(publicDir)) return;

	const files = fs.readdirSync(publicDir).filter((f) => /\.(jpg|jpeg|png)$/i.test(f));

	for (const file of files) {
		const inputPath = path.join(publicDir, file);
		const tempPath = path.join(publicDir, `.${file}.tmp`);
		const outputPath = path.join(publicDir, file);
		const webpPath = path.join(publicDir, file.replace(/\.\w+$/, '.webp'));

		try {
			// Optimize JPEG/PNG to temp file
			await sharp(inputPath)
				.resize(2000, 2000, { fit: 'inside', withoutEnlargement: true })
				.jpeg({ quality: 100, progressive: true })
				.toFile(tempPath);

			// Replace original with optimized version
			fs.renameSync(tempPath, outputPath);

			// Create WebP version
			await sharp(outputPath).webp({ quality: 100 }).toFile(webpPath);

			const optimizedSize = fs.statSync(outputPath).size;
			const webpSize = fs.statSync(webpPath).size;

			console.log(`${file}: ${(optimizedSize / 1024 / 1024).toFixed(2)} MB`);
			console.log(`WebP: ${(webpSize / 1024 / 1024).toFixed(2)} MB`);
		} catch (err) {
			console.error(`Error processing ${file}:`, err.message);
			process.exit(1);
		}
	}
}

await optimizeImagesInDir('public', 'public');
await optimizeImagesInDir('src/assets/images', 'src/assets/images');
console.log('All images optimized successfully');
