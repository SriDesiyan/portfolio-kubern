'use client';
import { useEffect, useRef } from 'react';

export default function NeuralNetwork() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = 600;
        canvas.height = 600;

        interface Node {
            x: number;
            y: number;
            layer: number;
            idx: number;
            pulse: number;
            pulseSpeed: number;
            active: boolean;
            activationTimer: number;
        }

        const layers = [4, 6, 8, 6, 4];
        const nodes: Node[] = [];
        const cx = 300, cy = 300;
        const radius = 200;

        layers.forEach((count, layerIdx) => {
            const angleStep = (Math.PI * 2) / layers.length;
            const layerAngle = layerIdx * angleStep - Math.PI / 2;
            const layerRadius = layerIdx === 2 ? 0 : (layerIdx === 1 || layerIdx === 3 ? radius * 0.45 : radius * 0.85);

            if (count === 8) {
                // Center ring
                for (let i = 0; i < count; i++) {
                    const a = (i / count) * Math.PI * 2;
                    nodes.push({
                        x: cx + Math.cos(a) * 80,
                        y: cy + Math.sin(a) * 80,
                        layer: layerIdx,
                        idx: i,
                        pulse: Math.random() * Math.PI * 2,
                        pulseSpeed: Math.random() * 0.03 + 0.01,
                        active: false,
                        activationTimer: 0,
                    });
                }
            } else {
                for (let i = 0; i < count; i++) {
                    const spread = count > 1 ? ((i / (count - 1)) - 0.5) * 0.8 : 0;
                    const angle = layerAngle + spread;
                    nodes.push({
                        x: cx + Math.cos(angle) * layerRadius,
                        y: cy + Math.sin(angle) * layerRadius,
                        layer: layerIdx,
                        idx: i,
                        pulse: Math.random() * Math.PI * 2,
                        pulseSpeed: Math.random() * 0.03 + 0.01,
                        active: false,
                        activationTimer: 0,
                    });
                }
            }
        });

        // Random activation
        let tick = 0;
        const activate = () => {
            const r = Math.floor(Math.random() * nodes.length);
            nodes[r].active = true;
            nodes[r].activationTimer = 30;
        };

        let animId: number;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            tick++;
            if (tick % 20 === 0) activate();

            // Draw connections
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 180) {
                        const isActive = nodes[i].active || nodes[j].active;
                        const alpha = isActive ? 0.35 : (1 - dist / 180) * 0.08;
                        const gradient = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
                        gradient.addColorStop(0, `rgba(0, 212, 255, ${alpha})`);
                        gradient.addColorStop(1, `rgba(157, 78, 221, ${alpha})`);
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = gradient;
                        ctx.lineWidth = isActive ? 1 : 0.5;
                        ctx.stroke();
                    }
                }
            }

            // Draw nodes
            nodes.forEach(node => {
                node.pulse += node.pulseSpeed;
                const pulseFactor = 0.7 + 0.3 * Math.sin(node.pulse);
                if (node.activationTimer > 0) node.activationTimer--;
                else node.active = false;

                const nodeRadius = node.active ? 8 * pulseFactor : 4 * pulseFactor;
                const color = node.active ? '#00d4ff' : '#9d4edd';
                const glowAlpha = node.active ? 0.6 : 0.2;

                // Glow
                const grd = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, nodeRadius * 4);
                grd.addColorStop(0, `${color}${Math.round(glowAlpha * 255).toString(16).padStart(2, '0')}`);
                grd.addColorStop(1, 'transparent');
                ctx.beginPath();
                ctx.arc(node.x, node.y, nodeRadius * 4, 0, Math.PI * 2);
                ctx.fillStyle = grd;
                ctx.fill();

                // Core
                ctx.beginPath();
                ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.fill();

                // Inner bright
                ctx.beginPath();
                ctx.arc(node.x, node.y, nodeRadius * 0.4, 0, Math.PI * 2);
                ctx.fillStyle = '#ffffff';
                ctx.globalAlpha = 0.8;
                ctx.fill();
                ctx.globalAlpha = 1;
            });

            // Rotating ring overlay
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(tick * 0.003);
            ctx.beginPath();
            ctx.arc(0, 0, radius * 0.95, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(0, 212, 255, 0.05)';
            ctx.lineWidth = 1;
            ctx.setLineDash([5, 20]);
            ctx.stroke();
            ctx.restore();

            animId = requestAnimationFrame(animate);
        };
        animate();
        return () => cancelAnimationFrame(animId);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                width: '100%',
                maxWidth: 560,
                height: 'auto',
                opacity: 0.85,
                filter: 'drop-shadow(0 0 40px rgba(0, 212, 255, 0.3))',
            }}
        />
    );
}
