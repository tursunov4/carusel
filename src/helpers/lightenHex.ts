'use client'

export default function lightenHex(hex: string, intensity = 0.9) {

  console.log(hex)

  // Убедимся, что hex корректен и приведем к 6-символьному формату
  hex = hex.replace(/^#/, '');
  if (hex.length === 3) hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  if (hex.length !== 6) return hex; // если невалидный hex

  // intensity = насколько "сильно" осветляем (0 = полностью белый, 1 = исходный цвет)
  intensity = Math.max(0, Math.min(1, intensity)); // ограничиваем 0-1

  // Разбираем hex на каналы
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Смешиваем с белым (255, 255, 255) с учетом интенсивности
  const blend = (channel: number): number => Math.round(channel * intensity + 255 * (1 - intensity));

  const lightR = blend(r);
  const lightG = blend(g);
  const lightB = blend(b);

  // Собираем обратно в hex
  const toHex = (c: number): string => c.toString(16).padStart(2, '0');

  console.log(`#${toHex(lightR)}${toHex(lightG)}${toHex(lightB)}`.toUpperCase())

  return `#${toHex(lightR)}${toHex(lightG)}${toHex(lightB)}`.toUpperCase();
}